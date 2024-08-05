---
title: web常见的攻击方式
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
date: 2024-7-8 21:36:52
---

<!-- @format -->

# web 常见的攻击方式

## XSS (Cross Site Scripting) 跨站脚本攻击

跨站脚本攻击`（XSS）`是一种常见的`Web`安全漏洞，攻击者通过在网页中注入恶意脚本，使得这些脚本在其他用户的浏览器中执行，从而窃取用户信息、劫持用户会话或执行其他恶意操作。`XSS`攻击主要分为以下几种类型：

### 存储型 XSS（Stored XSS）

恶意脚本被永久存储在目标服务器上，例如在数据库中。当用户访问包含恶意脚本的页面时，脚本会在用户的浏览器中执行。

- 示例：

```html
<!-- 攻击者在评论区输入恶意脚本 -->
<script>
  alert("XSS Attack");
</script>
```

- 防御措施
  - 对用户输入进行严格的验证和过滤
  - 对输出进行编码，防止脚本执行

### 反射型 XSS（Reflected XSS）

恶意脚本通过`URL`参数或表单提交传递给服务器，服务器将这些数据反射回用户的浏览器并执行。

- 示例：

```html
<!-- 攻击者构造恶意链接 -->
<a href="http://example.com/search?q=<script>alert('XSS Attack');</script>">Click me</a>
```

- 防御措施
  - 对用户输入进行严格的验证和过滤
  - 对输出进行编码，防止脚本执行

### DOM 型 XSS（DOM-based XSS）

恶意脚本通过修改网页的`DOM`结构在客户端执行，而不经过服务器。

- 示例：

```js
// 攻击者通过 URL 参数注入恶意脚本
var userInput = location.search.substring(1);
document.write(userInput);
```

- 防御措施
  - 避免直接使用用户输入修改 DOM
  - 使用安全的`DOM`操作方法，如`textContent`或`innerText`

### 防御措施总结

1. 输入验证和过滤：对所有用户输入进行严格的验证和过滤，防止恶意脚本注入
2. 输出编码：对输出到网页的内容进行编码，防止脚本执行。例如，使用`HTML`实体编码
3. 安全的 DOM 操作：避免直接使用用户输入修改 `DOM`，使用安全的方法如`textContent`或` innerText`

## CSRF

`CSRF（Cross-site request forgery）`跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求，利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的

### 工作原理

1. 用户登录：用户在受信任的网站上登录，并获得一个会话 `Cookie`。
2. 访问恶意网站：用户在登录状态下访问了攻击者控制的恶意网站。
3. 发送请求：恶意网站构造一个请求，并利用用户的会话`Cookie`将请求发送到受信任的网站。
4. 执行操作：受信任的网站接收到请求后，认为这是用户的合法请求，并执行相应的操作。

### 防御措施

1. 使用`CSRF`令牌
   每个表单或请求中包含一个唯一的、不可预测的令牌。服务器验证该令牌的有效性，以确保请求是合法的。
   服务器端验证：

   ```js
   // 服务器端验证 CSRF 令牌
   const csrfToken = req.body.csrf_token;
   if (csrfToken !== session.csrfToken) {
     res.status(403).send("CSRF token validation failed");
   }
   ```

2. 使用`SameSite Cookie`属性：
   设置`Cookie`的`SameSite`属性为`Strict`或`Lax`，限制`Cookie`在跨站请求中的发送。

   ```sh
   Set-Cookie: sessionid=abc123; SameSite=Strict
   ```

3. 使用双重提交`Cookie`
   在请求中包含一个与`Cookie`中相同的`CSRF`令牌，服务器验证这两个令牌是否一致。

## SQL 注入

`SQL`注入`（SQL Injection）`是一种常见的`Web`安全漏洞，攻击者通过在输入字段中插入恶意`SQL`代码，从而操纵数据库执行未授权的查询或操作。`SQL` 注入攻击可以导致数据泄露、数据篡改、甚至完全控制数据库服务器

### 工作原理

1. 用户输入：攻击者在输入字段中输入恶意 SQL 代码。
2. 构造查询：应用程序将用户输入直接拼接到 SQL 查询中。
3. 执行查询：数据库执行构造的查询，导致未授权的操作。

### 防御措施

1.  使用预编译语句`（Prepared Statements）`和参数化查询：预编译语句将`SQL`代码和数据分开处理，防止恶意代码注入
2.  使用存储过程：存储过程在数据库中预先编写和存储，避免直接拼接`SQL`查询
3.  输入验证和过滤：对用户输入进行严格的验证和过滤，防止恶意代码注入
4.  最小权限原则: 对用户输入进行严格的验证和过滤，防止恶意代码注入
<!-- @format -->
