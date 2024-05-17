---
title: "知识图谱平台搭建:登录页面搭建"
tags:
  - 前端
  - 知识图谱
categories:
  - - 前端开发
    - 平台搭建
abbrlink: a018d3f7
date: 2024-04-20 20:56:25
---

<!-- @format -->

# 平台登录页面搭建

- [平台登录页面搭建](#平台登录页面搭建)
  - [需求描述](#需求描述)
  - [前端部分](#前端部分)
    - [登录验证](#登录验证)
    - [存储 token](#存储-token)
  - [退出登录](#退出登录)
  - [后端部分](#后端部分)
    - [框架使用](#框架使用)

<!--more-->

## 需求描述

越写越觉得需要一个权限管理机制，不然谁都可以更改数据库了，这样很难蚌，所以要先实现一个登录界面的前后端交互，这次就先不进行登录验证的操作，因为这部分刚研究到 JWT，还没研究到权限管理部分。
所以这次的任务分解为：

前端：

1. 搭建登录界面
2. 实现用户名和密码输入的初步验证
3. 提交用户名和密码传至后端
4. 登录成功跳转，登录失败则显示`用户名或者密码输入失败`

后端：

1. 提供一个登录接口，接收前端发送的用户名和密码，进行验证
2. 如果验证通过，生成一个 JWT，然后返回给前端

## 前端部分

在写界面之前，还对原来的路由进行了整理，把原来的进页面就是管理界面换了，把部分一级路由转为二级。

### 登录验证

点击登录后就会进行表单验证，这里是使用 el-form 的自定义规则校验实现

- 代码实现：

```TS
//登录请求
const login = () => {
  //表单校验
  loginForms.value.validate(async (valid: any) => {
    if (valid) {
      //校验通过
      let res = await userStore.login(loginForm.username, loginForm.password)
      if (res === "Invalid username or password") {
        alert("用户名或密码错误")
      }
      else if (res === "success") {
        router.push("/KGManage")
      }
    } else {
      //校验不通过
      console.log("error submit!!")
      return false
    }
  })
}

//自定义校验规则函数
const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length) {
    callback()
  } else {
    callback(new Error("账号长度至少五位"))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length) {
    callback()
  } else {
    callback(new Error("密码长度至少六位"))
  }
}

//定义表单校验配置对象
const rules = {
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { trigger: "blur", validator: validatorUserName },
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    { trigger: "blur", validator: validatorPassword },
  ],
}
```

### 存储 token

为了后续实现保持登录，所以建了个仓库存储后端返回过来的 token，因为后端部分改用 statu 的状态码，所以现在请求失败要改成捕捉错误而不是单纯的 res.status 了

- 代码实现：

```TS
export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    token: "",
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const res = await userApi.reqLogin(username, password)
        if (res.status === 200) {
          this.token = res.data.token
          return res.data
        } else {
          throw new Error(res.message) // 如果状态码不是 200，抛出一个错误
        }
      } catch (err: unknown) {
        const axiosError = err as AxiosError
        if (axiosError.response && axiosError.response.status === 401) {
          return "Invalid username or password" // 如果状态码是 401，返回特定的错误消息
        } else {
          return "An error occurred during login" // 如果状态码不是 401，返回通用的错误消息
        }
      }
    },
  },
  getters: {},
})
```

## 退出登录

清空`localStorage`就行

```TS
    logout() {
      this.token = ""
      this.refresh = ""
      this.username = ""
      this.groups ="[]"
      localStorage.removeItem("username")
      localStorage.removeItem("groups")
      localStorage.removeItem("token")
      localStorage.removeItem("refresh")
    }
```

## 后端部分

### 框架使用

这里使用到了 Django 的 rest_framework，介绍如下：

```
Django REST framework（也被称为 DRF）是一个强大而灵活的工具，用于构建 Web API。它是一个基于 Django 框架的开源项目，用于创建 RESTful 风格的 Web 服务。

```

具体验证身份和生成 JWT 的代码如下：

```python
class LoginView(APIView):
  # permissions.AllowAny 表示任何人都可以访问这个视图，无论他们是否已经登录。
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        print(request.data)  # 打印请求体
        username = request.data.get("username")
        password = request.data.get("password")
        ##使用 Django 的 authenticate 函数验证用户名和密码。如果用户名和密码正确，authenticate 函数会返回一个 User 对象；
        user = authenticate(request, username=username, password=password)
        if user is not None:
          ##生成一个新的刷新令牌（Refresh Token）。刷新令牌可以用于获取新的访问令牌（Access Token）
            refresh = RefreshToken.fo  r_user(user)
            return Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                },
                status=status.HTTP_200_OK,
            )
        else:
            # 用户名或密码错误
            return Response(
                {"error": "Invalid username or password"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

```
