import os
from algoliasearch.search_client import SearchClient
import markdown
import json

# 初始化 Algolia 客户端
client = SearchClient.create("27XTJSINHO", "d1fc312978a86544690d9143d1cd7f80")
index = client.init_index("ZJBlog")

# 遍历文件夹及其子文件夹中的所有 Markdown 文件
for root, dirs, files in os.walk(r"D:\blog\blog_vitepress\docs\post"):
    for filename in files:
        if filename.endswith(".md"):
            # 读取和解析 Markdown 文件
            with open(os.path.join(root, filename), "r", encoding="utf-8") as file:
                content = file.read()
                html = markdown.markdown(content)

                # 分割 HTML 内容
                chunks = [html[i : i + 8000] for i in range(0, len(html), 8000)]

                for i, chunk in enumerate(chunks):
                    # 创建一个 JSON 对象
                    obj = {"objectID": f"{filename}-{i}", "content": chunk}

                    # 上传 JSON 对象到 Algolia
                    index.save_object(obj)
                    print(f"{filename}-{i}")
