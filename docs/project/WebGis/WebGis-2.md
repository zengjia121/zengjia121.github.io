---
title: WebGis 平台搭建(二):前后端连通及用户登录
tags:
  - 前端
  - WebGis
categories:
  - - 前端开发
    - 平台搭建
abbrlink: 52de6a43
date: 2024-7-15 20:12:49
---

<!-- @format -->

# WebGis 平台搭建(二):前后端连通及用户登录

上次完成了 Node.js 服务器的搭建，这次是在前端搭建一个登录页面，在后端接收，并返回 token，由前端将 token 解码后获得用户的相关信息

## 后端部分

后端部分流程：

1. 接收到请求体后，查询数据库是否有该用户
2. 比较请求中提供的密码和数据库中存储的密码哈希
3. 创建一个包含用户`id`和`name`的对象`rules`，用作生成`JWT`的`payload`（负载）。
4. 生成签名`token`的密钥,`{ expiresIn: 60 \* 60 }`指定`token`的过期时间为 1 小时

```ts
router.post("/login", (req, res) => {
  // console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  //查询数据库
  User.findOne({ email }).then((user) => {
    console.log(user);
    if (!user) {
      return res.status(404).json({ email: "用户不存在！" });
    }
    // bcrypt 密码匹配
    bcrypt.compare(password, user.password).then((isMatch) => {
      console.log(password, user.password);
      if (isMatch) {
        //res.json({msg:'匹配成功'})
        // 返回token
        const rules = { id: user.id, name: user.name };
        //jwt.sign('规则', '加密名字', '过期时间', '箭头函数')
        jwt.sign(rules, "secret", { expiresIn: 60 * 60 }, (err, token) => {
          if (err) throw err;
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        });
      } else {
        res.status(404).json({ password: "密码错误" });
      }
    });
  });
});
```

## 前端部分

前端部分流程：

1. 调用`validate`方法来验证表单数据
2. 发送异步`POST`请求到`/api/users/login`，携带用户登录信息`（loginUser）`
3. 将`token`存储在`localStorage`中,使用`jwtDecode`函数解码`token`，获取用户信息
4. 调用`authStore` 的 `setUser`方法,将解码后的用户信息设置为当前用户

```ts
import { jwtDecode } from "jwt-decode"; //注意 最新版本改成 jwtDecode 了
const valid = await formRef.value.validate();
if (valid) {
  try {
    console.log("登录成功:", toRefs(loginUser));
    const res = await service.post("/api/users/login", loginUser);

    const { token } = res.data;
    console.log("token:", token);
    localStorage.setItem("eletoken", token);
    const decode = jwtDecode(token);
    console.log(decode);
    authStore.setIsAutnenticated(!isEmpty(decode));
    authStore.setUser(decode);
    router.push("/index");
  } catch (error) {
    console.error("登录失败:", error);
  }
} else {
  console.log("error submit!!");
  return false;
}
```

<!-- @format -->
