---
title: WebGis平台搭建(九):WebSocket的实现
tags:
  - 前端
  - WebGis
categories:
  - - 前端开发
    - 平台搭建
date: 2024-10-4 14:59:12
---

<!-- @format -->

# WebGis 平台搭建(九):WebSocket 的实现

## 什么是 WebSocket

`WebSocket`是一种在单个`TCP`连接上进行全双工通信的协议。`WebSocket`使得客户端和服务器之间可以进行实时的双向通信，适用于需要频繁更新数据的应用场景，

## WebSocket 工作原理

1. 握手阶段：客户端通过`HTTP`请求向服务器发起`WebSocket`握手请求。服务器接收到请求后，如果支持`WebSocket`，则返回一个`101`状态码，表示协议切换成功。
2. 数据传输阶段：握手成功后，客户端和服务器之间可以通过`WebSocket`连接进行双向通信。数据以帧`（frame）`的形式传输，每个帧包含一个数据包。
3. 关闭连接：客户端或服务器可以随时发送关闭帧来关闭连接。

## 客户端部分（Vue3）

- `WebSocket`封装

  将`WebSocket`封装为一个类，包含`WebSocket`的基本操作，包括连接、发送消息、接收消息和关闭连接。这样方便后续进行操作，

```js
/** @format */

// websocketService.js
import { ref } from "vue";

class websocketService {
  private ws: WebSocket | null = null;
  public messages = ref<string[]>([]);
  public isWebSocketOpen = ref<boolean>(false);
  constructor(private url: string) {}
  connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onmessage = (event) => {
      console.log("WebSocket message received:", event.data);
      this.messages.value.push(event.data);
    };

    this.ws.onopen = () => {
      console.log("WebSocket connection established");
      this.isWebSocketOpen.value = true;
    };

    this.ws.onclose = () => {
      console.log("WebSocket connection closed");
      this.isWebSocketOpen.value = false;
    };

    this.ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      this.isWebSocketOpen.value = false;
    };
  }
  sendMessage(message: string) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      console.error("WebSocket is not open.");
    }
  }
  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

export default websocketService;

```

- 类调用

```js
import WebSocketService from "../api/WebSocket";
let ws = new WebSocketService(`ws://localhost:3000`);
const messages = ws.messages;
const messageInput = ref("");
const isWebSocketOpen = ref(false);

onMounted(() => {
  // ws = new WebSocket(`ws://${location.host}`)
  ws.connect();
});

onBeforeUnmount(() => {
  ws.close();
});

const sendMessage = () => {
  if (messageInput.value.trim() !== "") {
    ws.sendMessage(messageInput.value);
    messageInput.value = "";
  } else {
    console.error("WebSocket is not open.");
  }
};
```

## 服务器端部分（Node.js）

- 创建服务器

首先需要创建`WebSocket`服务器，监听`message`事件

```js
// 创建 HTTP 服务器
const server = createServer(app);

// 创建 WebSocket 服务器
const wss = new WebSocketServer({ server });
console.log(wss);
wss.on("listening", () => {
  console.log("WebSocket server is running");
});
wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    const receivedMessage = message.toString();
    console.log(`Received message: ${receivedMessage}`);
    // 广播消息给所有客户端
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(receivedMessage);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
```

- 服务器主动推送

测试了一下这个功能，还挺好玩的

```js
setInterval(() => {
  const message = `Server time: ${new Date().toLocaleTimeString()}`;
  console.log(message);
  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(message);
    }
  });
}, 5000); // 每5秒推送一次消息
```

  <!-- @format -->
