---
title: "知识图谱平台搭建:文件上传页面搭建"
tags:
  - 前端
  - 知识图谱
categories:
  - - 前端开发
    - 平台搭建
abbrlink: af759d1b
date: 2024-03-19 19:28:24
---

<!-- @format -->

# 基于 el-upload 实现添加、删除、批量上传 csv 文件

技术使用:Vue3 + element-plus + axios + Django

- [基于 el-upload 实现添加、删除、批量上传 csv 文件](#基于-el-upload-实现添加删除批量上传-csv-文件)
  - [前端部分](#前端部分)
    - [el-upload 组件设置](#el-upload-组件设置)
    - [fileList 设置](#filelist-设置)
    - [自定义上传设置](#自定义上传设置)
  - [后端部分](#后端部分)
  - [总结](#总结)
  <!--more-->

这次是实现从前端传送 csv 文件然后到后端进行知识图谱的构建的过程，完成数据库的增删改查中的增添功能。  
虽然 el-upload 组件有自动上传以及单个文件点击删除等功能，然而默认的样式有点丑，而且上传多个文件的时候是重复调用接口，但我需要通过文件存储在同一个文件夹下，也就是批量上传，所以整合了一下这个页面的需求：

1. el-upload 界面美化
2. 点击按钮单个文件删除
3. 文件一次批量上传

最终页面如下：
![上传页面](../images/blog-2024-03-19-20-07-37.png)

## 前端部分

## el-upload 组件设置

```HTML
    <el-upload
      class="upload"
      ref="uploadRef"
      :file-list="fileList"
      list-type="text"
      drag
      multiple
      :http-request="submitUpload"
      :action="postUrl"
      :on-change="ChangeFile"
      :on-remove="handleRemove"
      :auto-upload="false"
      :before-upload="beforeUpload"
    >
```

首先是关闭自动上传按钮`:auto-upload="false"`，改为使用 button 触发自定义上传函数`:http-request="submitUpload"`，此外，upload 组件不会自动更新`:file-list="fileList"`，所以需要在文件添加时触发加入事件`:on-change="ChangeFile"`，和删除时触发删除事件`:on-remove="handleRemove"`

## fileList 设置

文件加入时会触发`on-change`事件，需要在这时候把文件加入 fileList 中，并且由于`on-change`是文件变动便会触发，单纯每次触发都加入的话，会在删除时重复加入文件，所以要判断是否存在相同的文件

```TypeScript
//文件状态更改
const ChangeFile = (file: UploadUserFile) => {
//文件添加时加入fileList
if (!fileList.value.some((item) => item.uid === file.uid)) {
  fileList.value.push(file)
}
}
```

这样就可以在点击图标时只删除一个文件

```TypeScript
const handleRemove = (file: UploadUserFile) => {
//删除单个文件
fileList.value = fileList.value.filter((item) => item.uid !== file.uid)
}
```

以及清空全部文件

```TypeScript
//清空所有文件
const clearFiles = () => {
if (uploadRef.value) uploadRef.value.clearFiles()
fileList.value = []
}
```

## 自定义上传设置

网上很多教程是直接调用 axios 进行传输，虽然自己二次封装了 axios，但操作其实差不多，具体就是：

1. 判断所有传输文件是否符合要求格式
2. 将多个数据合并为一个 FormData
3. 使用 axios 将文件传输
4. 传输成功后清空文件列表，否则弹出消息窗

首先是在文件传输前判断要求，使用`:before-upload="beforeUpload"`进行判断类型和文件大小是否符合

```TypeScript
const beforeUpload = (file: File) => {
  const isCsv =
    file.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    file.type === "application/vnd.ms-excel" ||
    file.type === "text/csv"
  if (!isCsv) {
    ElMessage({ message: "只能上传csv文件", type: "warning" })
  }
  const isLt2M = file.size / 1024 / 1024 < 10
  if (!isLt2M) {
    ElMessage({
      message: `上传文件大小不能超过 ${maxFileSize}MB!`,
      type: "warning",
    })
  }
  return isCsv && isLt2M
}

```

接着在自定义的上传函数`:http-request="submitUpload"`中将文件拼成一个 FormData，再调用自己的接口进行传输

```TypeScript
//文件上传
const submitUpload = async () => {
console.log(fileList.value)
const form = new FormData()
fileList.value?.forEach((file: UploadUserFile, index: number) =>
 form.append(`file${index}`, file.raw)
)
let res = await reqUploadFile(form)
if (res.status === 200) {
 ElMessage({ message: "上传成功", type: "success" })
 //上传成功清除上传列表
 if (uploadRef.value) uploadRef.value.clearFiles()
 fileList.value = []
} else {
 ElMessage({
   showClose: true,
   center: true,
   dangerouslyUseHTMLString: true,
   message: `<p>${res.message}</p>`,
   type: "error",
 })
}
}
```

最后是自己的接口，传输时注意要设置 headers

```TypeScript
//传输文件
export const reqUploadFile = (data: FormData) => {
  return AxiosService.post(`/api_KG/createGraph`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
```

## 后端部分

后端部分比较简单，缺少很多文件的验证与其他信息，看看后续有没有空加上

```Python
#将传输的文件存储在本地
def handle_uploaded_file(uploaded_file, destination_path):
    with open(destination_path, "wb") as destination_file:
        for chunk in uploaded_file.chunks():
            destination_file.write(chunk)

@csrf_exempt
## 读取csv新增事件图谱
def createGraph(request):
    response = {}
    try:
        if request.method == "POST":
            # print(request)
            # print(request.FILES)
            if not request.body:
                raise ValueError("Empty request body")
            if not request.FILES:
                raise ValueError("No file uploaded")
            nanoid = generate()
            for key, uploaded_file in request.FILES.items():
                Save_Path = f"G:/code/Django/helloworld/UploadData/{nanoid}/"
                destination_path = Save_Path + uploaded_file.name
                os.makedirs(os.path.dirname(destination_path), exist_ok=True)
                handle_uploaded_file(uploaded_file, destination_path)
            response["status"] = 200
        else:
            response["status"] = 500
            response["message"] = "Invalid request method"
    except Exception as e:
        response["status"] = 500
        response["message"] = str(e)
        response["error_num"] = 0
    return JsonResponse(response)
```

## 总结

这次只达成了文件传输功能，对于错误处理、文件验证、进度反馈等还没有编写，提醒一下自己，记得补上
