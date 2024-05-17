---
title: "知识图谱平台搭建:登录验证与自动登录"
tags:
  - 前端
  - 知识图谱
categories:
  - - 前端开发
    - 平台搭建
abbrlink: 52de6a43
date: 2024-05-07 10:28:18
---

<!-- @format -->

# 自动登录实现

- [自动登录实现](#自动登录实现)
  - [需求描述](#需求描述)
  - [前端部分](#前端部分)
    - [发送 token](#发送-token)
    - [路由守卫](#路由守卫)
  - [后端部分](#后端部分)

<!--more-->

## 需求描述

之前完成了登录验证，在`localStorage`存储了 token，这次实现在启动系统的时候，从`localStorage`读取 token，然后传输到后端进行验证，验证成功就跳转到主界面。
所以这次任务分解为：

- 前端
  1. 启动时自动读取 token 并传输至后端
  2. 登录成功则跳转页面
- 后端
  1. 验证前端传来的 token
  2. 返回登录结果

## 前端部分

前端主要是编写一个自动登录的接口，在发送时设置请求头，使得可以在 HTTP 请求中发送授权信息  
这里要注意，请求头包含的是 token 字段，此外还发送了 refresh 在数据中，用于在后端生成新的 token 令牌并存储

### 发送 token

- 接口代码

  ```TS
  export const reqAutoLogin = (token: string, refresh: string)  => {
    // headers 属性中包含一个 Authorization 字段，其值为 "JWT " 加上 token
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
    // 请求的数据是一个包含 refresh 的对象
    return AxiosService.post("/api_user/token/", { refresh }, config).catch(
      (err) => {
        throw err
      }
    )
  }
  ```

- 返回代码

  ```TS
      async autoLogin() {
      try {
        const res = await userApi.reqAutoLogin(this.token, this.refresh)
        if (res.status === 200) {
          this.token = res.data.access
          this.username = res.data.username
          this.groups = res.data.groups
          console.log(res.data)
          localStorage.setItem("groups", this.groups)
          localStorage.setItem("username", this.username)
          localStorage.setItem("token", this.token)
          return "success"
        } else {
          throw new Error(res.message) // 如果状态码不是 200，抛出一个错误
        }
      } catch (err: unknown) {
        const axiosError = err as AxiosError
        console.log(axiosError)
      }
    }
  ```

### 路由守卫

顺便搞了下路由守卫，假如没有登录的话就跳转登录页面

```TS
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const token = userStore.token
  if (to.name !== "Login" && !token) {
    next({ name: "Login" })
  } else {
    next()
  }
})
```

## 后端部分

首先是要在`setting.py`中配置使用`SIMPLE_JWT`，这样在前端响应头带着指定前缀的时候，服务器会解析这个头，验证 JWT 令牌的有效性，然后处理请求

```Python
SIMPLE_JWT = {
    "AUTH_HEADER_TYPES": ("JWT",),  # 指定前缀
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),  # 访问令牌过期时间
    "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(days=1),  # 滑动刷新令牌的过期时间
    "SLIDING_TOKEN_REFRESH_LIFETIME_GRACE_PERIOD": timedelta(
        minutes=5
    ),  # 滑动刷新令牌宽限期
    "SLIDING_TOKEN_REFRESH_EXP_CLAIM": "refresh_exp",  # 滑动刷新令牌的过期时间声明名称
}
```

刷新访问令牌则使用权限装饰器进行

```Python

# 使用权限类装饰器，只允许已认证的用户访问此视图
@permission_classes([IsAuthenticated])
class TokenView(APIView):
    def post(self, request):
        try:
            refresh = request.data.get("refresh")
            # 使用 refresh 值创建一个 RefreshToken 对象
            token = RefreshToken(refresh)
            groups = request.user.groups.all()
            # new_refresh = token.rotate()
            return Response(
                {
                    "status": status.HTTP_200_OK,
                    "data": {
                        "username":request.user.username,
                        "groups": [group.name for group in groups],
                        "access": str(token.access_token),
                    },
                },
                status=status.HTTP_200_OK,
            )
        except TokenError:
            return Response(
                {"error": "Refresh token is expired"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        except:
            return Response(
                {"error": "Invalid refresh token"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

```
