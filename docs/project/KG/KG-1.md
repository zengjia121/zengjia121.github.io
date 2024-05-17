---
title: "知识图谱平台搭建:实现节点与关系信息修改"
tags:
  - 前端
  - 知识图谱
categories:
  - [前端开发, 平台搭建]
abbrlink: b4668f1d
date: 2024-03-17 21:17:58
---

<!-- @format -->

# 重构 neo4j 前端界面实现节点与关系信息修改

- [重构 neo4j 前端界面实现节点与关系信息修改](#重构-neo4j-前端界面实现节点与关系信息修改)
  - [前端界面：](#前端界面)
  - [后端部分：](#后端部分)

技术使用:Vue3+Django+neo4j

<!--more-->

关于节点与关系信息修改，在 neo4j 中主要是使用 Cypher 语句来实现，但这样每次都要输很长一串（而且很麻烦

之前实现了知识图谱的显示与点击展示知识图谱信息，所以这次信息修改任务主要分解为实现主要以下部分：

1. 前端
   1. 实现修改信息的输入
   2. 修改信息传输至后端
   3. 后端返回信息修改完成信息后图谱界面更新
2. 后端
   1. 接受前端信息
   2. 构建 Cypher 语句
   3. 连接数据库修改信息，完成后返回结果至前端

## 前端界面：

- 增设修改按钮，点击后将原本展示界面的 div 更换为 el-input, 这里使用 v-if 和 v-else 切换, 并确保不能修改的内容不会显示为 el-input

  ```TypeScript
          <el-input
          :placeholder="DataDetail"
          v-if="
            showDescriptions &&
            isChange &&
            key != 'id' &&
          "
          v-model="clickData[key]"
          style="width: 220px; height: 28px"
        ></el-input>
        <div v-else>{{ DataDetail }}</div>
  ```

* 修改完成后，将修改信息与当前修改节点的 id 合并，这里其实可以直接提取节点的所有信息再传输，省略掉信息合并的一步，但感觉这样加大后续的时间耗费而且可以排除没有修改直接点保存的情况  
  注：后续修改节点和修改关系的语句不同，这里要传输修改的类型是节点还是关系

  ```TypeScript
  const SaveChange = async () => {
  let changedData = {}
  let id = clickData.value["id"]
  // 在调用 Object.entries 之前检查 OriginData 是否为 null
  if (OriginData) {
    // 使用 Object.entries 方法遍历 OriginData
    for (let [key, value] of Object.entries(OriginData)) {
      // 如果 clickData.value 中的值与 OriginData 中的值不同，则将它添加到 changedData 中
      if (clickData.value[key] !== value) {
        changedData[key] = clickData.value[key]
      }
    }
  }
  // 如果 changedData 不为空，则调用 reqChangeInfo 方法
  if (Object.keys(changedData).length !== 0) {
    let res = await KgStore.getChangeInfo(id, ClickType.value, changedData)
    if (res === "success") {
      isChange.value = false
    } else {
      isFail.value = true
    }
  }
  }

  ```

* 在 pinia 中更新图谱数据与发送修改请求, 因为一次只修改一个节点，所以等服务器返回修改成功后，直接修改前端数据存储的对应的节点，不用每次都重新加载图谱

```Typescript
    async getChangeInfo(id: string, type: string, data: object) {
      if (type === "Node") {
        const node = this.Nodes.find((item) => item.节点编号 === id);
        if (node) {
          // 使用 Object.assign 方法来合并旧的节点信息和新的信息

          const res = await reqChangeInfo(id, type, data);
          if (res.status === 200) {
            Object.assign(node, data);
            return "success";
          } else {
            return res.message;
          }
        }
      } else if (type === "Rel") {
        const rel = this.Relationships.find((item) => item.关系编号 === id);
        if (rel) {
          const res = await reqChangeInfo(id, type, data);
          if (res.status === 200) {
            Object.assign(rel, data);
            return "success";
          } else {
            return res.message;
          }
        }
      }
    },
```

## 后端部分：

后端主要是使用 Python 编写（该死的 我不会 Java），这部分很简单，就是获取数据，然后构建 Cypher 语句修改节点
顺便一提，修改节点的模板是:

```SQL
MATCH (n) where n.id = $node_id SET n.{key} = ${key}
```

而修改关系的模板是：

```SQL
MATCH () - [r] -> () where r.id = $rel_id SET n.{key} = ${key}
```

所以要在传输时记得传输修改类型
具体修改代码如下:

```Python
@csrf_exempt
# 修改节点信息
#{id:id,type:Node||Rel,data:{属性名:属性值}
def changeGraphInfo(request):
    response = {}
    try:
        if request.method == "POST":
            if not request.body:
                raise ValueError("Empty request body")
            try:
                data = json.loads(request.body)
            except json.JSONDecodeError:
                raise ValueError("Invalid JSON in request body")
            id = data.get("id")
            ChangeType = data.get("type")
            ChangeData = data.get("data")
            if ChangeType == "Node":
                # 构建 SET 子句
                set_clauses = ", ".join(
                    f"n.{key} = ${key}" for key in ChangeData.keys()
                )

                # 使用 Graph.run 方法执行 Cypher 查询来更新节点的值
                res = graph.run(
                    f"MATCH (n) where n.id = $node_id SET {set_clauses}",
                    node_id=id,
                    **ChangeData,
                )
            elif ChangeType == "Rel":
                # 构建 SET 子句
                set_clauses = ", ".join(
                    f"r.{key} = ${key}" for key in ChangeData.keys()
                )

                # 使用 Graph.run 方法执行 Cypher 查询来更新节点的值
                res = graph.run(
                    f"MATCH ()-[r]->() where r.id = $rel_id SET {set_clauses}",
                    rel_id=id,
                    **ChangeData,
                )
            if res:
                response["status"] = 200
            else:
                response["status"] = 500
                response["message"] = "No data changed"
    except Exception as e:
        response["status"] = 500
        response["message"] = str(e)
        response["error_num"] = 0
    return JsonResponse(response)
```

总而言之，修改部分这样就完成了，没有具体界面展示（我懒得启动服务器（（
