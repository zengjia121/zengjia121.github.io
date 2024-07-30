console.log("\n %c Post-Abstract-AI 博客文章摘要AI生成工具 %c https://github.com/zhheo/Post-Abstract-AI \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;")

function tianliGPT(usePjax) {
  var tianliGPTIsRunning = false;

  function insertAIDiv(selector) {
    // 首先移除现有的 "post-TianliGPT" 类元素（如果有的话）
    removeExistingAIDiv();

    // 获取目标元素
    let targetElement = document.querySelector(selector);

    // 如果没有找到目标元素，持续尝试直到超时
    if (!targetElement) {
      const maxDuration = 20000; // 最大等待时间10秒
      const interval = 300; // 每0.3秒检查一次
      let elapsed = 0; // 已经过去的时间

      const intervalId = setInterval(() => {
        elapsed += interval;
        targetElement = document.querySelector(selector); // 使用let声明后，这里可以更新外部的targetElement变量

        if (targetElement) {
          clearInterval(intervalId); // 找到元素，清除定时器
          // console.log('找到目标元素:', targetElement);
          // 这里可以添加对找到的元素的操作
        } else if (elapsed >= maxDuration) {
          clearInterval(intervalId); // 超时，清除定时器
          console.log('超时未找到元素');
          return
        }
      }, interval);
    }

    // 创建要插入的HTML元素
    const aiDiv = document.createElement('div');
    aiDiv.className = 'post-TianliGPT';

    const aiTitleDiv = document.createElement('div');
    aiTitleDiv.className = 'tianliGPT-title';
    aiDiv.appendChild(aiTitleDiv);

    const aiIcon = document.createElement('i');
    aiIcon.className = 'tianliGPT-title-icon';
    aiTitleDiv.appendChild(aiIcon);

    // 插入 SVG 图标
    aiIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0 0 48 48">
    <title>机器人</title>
    <g id="&#x673A;&#x5668;&#x4EBA;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <path d="M34.717885,5.03561087 C36.12744,5.27055371 37.079755,6.60373651 36.84481,8.0132786 L35.7944,14.3153359 L38.375,14.3153359 C43.138415,14.3153359 47,18.1768855 47,22.9402569 L47,34.4401516 C47,39.203523 43.138415,43.0650727 38.375,43.0650727 L9.625,43.0650727 C4.861585,43.0650727 1,39.203523 1,34.4401516 L1,22.9402569 C1,18.1768855 4.861585,14.3153359 9.625,14.3153359 L12.2056,14.3153359 L11.15519,8.0132786 C10.920245,6.60373651 11.87256,5.27055371 13.282115,5.03561087 C14.69167,4.80066802 16.024865,5.7529743 16.25981,7.16251639 L17.40981,14.0624532 C17.423955,14.1470924 17.43373,14.2315017 17.43948,14.3153359 L30.56052,14.3153359 C30.56627,14.2313867 30.576045,14.1470924 30.59019,14.0624532 L31.74019,7.16251639 C31.975135,5.7529743 33.30833,4.80066802 34.717885,5.03561087 Z M38.375,19.4902885 L9.625,19.4902885 C7.719565,19.4902885 6.175,21.0348394 6.175,22.9402569 L6.175,34.4401516 C6.175,36.3455692 7.719565,37.89012 9.625,37.89012 L38.375,37.89012 C40.280435,37.89012 41.825,36.3455692 41.825,34.4401516 L41.825,22.9402569 C41.825,21.0348394 40.280435,19.4902885 38.375,19.4902885 Z M14.8575,23.802749 C16.28649,23.802749 17.445,24.9612484 17.445,26.3902253 L17.445,28.6902043 C17.445,30.1191812 16.28649,31.2776806 14.8575,31.2776806 C13.42851,31.2776806 12.27,30.1191812 12.27,28.6902043 L12.27,26.3902253 C12.27,24.9612484 13.42851,23.802749 14.8575,23.802749 Z M33.1425,23.802749 C34.57149,23.802749 35.73,24.9612484 35.73,26.3902253 L35.73,28.6902043 C35.73,30.1191812 34.57149,31.2776806 33.1425,31.2776806 C31.71351,31.2776806 30.555,30.1191812 30.555,28.6902043 L30.555,26.3902253 C30.555,24.9612484 31.71351,23.802749 33.1425,23.802749 Z" id="&#x5F62;&#x72B6;&#x7ED3;&#x5408;" fill="#444444" fill-rule="nonzero"></path>
    </g>
    </svg>`;

    const aiTitleTextDiv = document.createElement('div');
    aiTitleTextDiv.className = 'tianliGPT-title-text';
    if (typeof tianliGPT_Title === "undefined") {
      aiTitleTextDiv.textContent = 'AI摘要';
    } else {
      aiTitleTextDiv.textContent = tianliGPT_Title;
    }
    aiTitleDiv.appendChild(aiTitleTextDiv);

    const aiTagDiv = document.createElement('div');
    aiTagDiv.className = 'tianliGPT-tag';
    aiTagDiv.id = 'tianliGPT-tag';
    if (typeof tianliGPT_Name === "undefined") {
      aiTagDiv.textContent = 'TianliGPT';
    } else {
      aiTagDiv.textContent = tianliGPT_Name;
    }
    aiTitleDiv.appendChild(aiTagDiv);

    const aiExplanationDiv = document.createElement('div');
    aiExplanationDiv.className = 'tianliGPT-explanation';
    aiExplanationDiv.innerHTML = '生成中...' + '<span class="blinking-cursor"></span>';
    aiDiv.appendChild(aiExplanationDiv); // 将 tianliGPT-explanation 插入到 aiDiv，而不是 aiTitleDiv

    // 找到目标元素中的 <h1> 元素
    const h1Element = targetElement.querySelector('h1');
    // 将创建的元素插入到 <h1> 元素的下方
    if (h1Element.nextSibling) {
      h1Element.parentNode.insertBefore(aiDiv, h1Element.nextSibling);
    } else {
      h1Element.parentNode.appendChild(aiDiv);
    }
  }

  function removeExistingAIDiv() {
    // 查找具有 "post-TianliGPT" 类的元素
    const existingAIDiv = document.querySelector(".post-TianliGPT");

    // 如果找到了这个元素，就从其父元素中删除它
    if (existingAIDiv) {
      existingAIDiv.parentElement.removeChild(existingAIDiv);
    }
  }

  var tianliGPT = {
    //读取文章中的所有文本
    getTitleAndContent: function() {
      try {
        const title = document.title;
        const container = document.querySelector(tianliGPT_postSelector);
        if (!container) {
          console.warn('TianliGPT：找不到文章容器。请尝试将引入的代码放入到文章容器之后。如果本身没有打算使用摘要功能可以忽略此提示。');
          return '';
        }
        const paragraphs = container.getElementsByTagName('p');
        const headings = container.querySelectorAll('h1, h2, h3, h4, h5');
        let content = '';

        for (let h of headings) {
          content += h.innerText + ' ';
        }

        for (let p of paragraphs) {
          // 移除包含'http'的链接
          const filteredText = p.innerText.replace(/https?:\/\/[^\s]+/g, '');
          content += filteredText;
        }

        const combinedText = title + ' ' + content;
        let wordLimit = 1000;
        if (typeof tianliGPT_wordLimit !== "undefined") {
          wordLimit = tianliGPT_wordLimit;
        }
        const truncatedText = combinedText.slice(0, wordLimit);
        return truncatedText;
      } catch (e) {
        console.error('TianliGPT错误：可能由于一个或多个错误导致没有正常运行，原因出在获取文章容器中的内容失败，或者可能是在文章转换过程中失败。', e);
        return '';
      }
    },

    fetchTianliGPT: async function(content) {
      if (!tianliGPT_key) {
        let info = "没有获取到key，代码可能没有安装正确。如果你需要在tianli_gpt文件引用前定义tianliGPT_key变量。详细请查看文档。"
        tianliGPT.aiShowAnimation(info)
        return info;
      }

      if (tianliGPT_key === "5Q5mpqRK5DkwT1X9Gi5e") {
        let info = "请购买 key 使用，如果你能看到此条内容，则说明代码安装正确。"
        tianliGPT.aiShowAnimation(info)
        return info;
      }
      var url = window.location.href;
      const title = document.title;
      const apiUrl = 'https://summary.tianli0.top/';
      const timeout = 20000; // 设置超时时间（毫秒）

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            content: content,
            key: tianliGPT_key,
            url: window.location.href,
            title: document.title
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId); // 清除定时器，避免不必要的abort

        if (response.ok) {
          const data = await response.json();
          return {
            summary: data.summary
          };
        } else {
          let info = ""
          const errorData = await response.json(); // 假设错误响应也是JSON格式

          if (response.status === 514) {
            info = "TianliGPT is only available in mainland China, and is not yet open to overseas users, so stay tuned!";
            tianliGPT.aiShowAnimation(info);
            return info;
          }

          // 根据403错误处理
          if (response.status === 403) {
            switch (errorData.err_code) {
              case 1:
                // 你的具体错误处理逻辑，例如显示某个特定的错误信息
                info = "你的网站设置了Referrer-Policy为same-origin，这会导致Tianli无法验证你的请求来源。TianliGPT依赖refer进行来源判断，特别是meta标签的referrer属性需要修改，至少为origin。例如：<meta name=\"referrer\" content=\"origin\">";
                tianliGPT.aiShowAnimation(info);
                return info;
              case 2:
                // 你的具体错误处理逻辑，例如显示某个特定的错误信息
                info = "你正在使用的tianliGPT_key已经被其他网站绑定或不存在，请检查当前网站地址是否在summary.zhheo.com中已绑定。";
                tianliGPT.aiShowAnimation(info);
                return info;
              // 这里可以添加更多的err_code判断分支
              case 3:
                info = "参数缺失，请检查是否正确配置tianliGPT_key"
                tianliGPT.aiShowAnimation(info);
                return info;
              case 4:
                document.querySelectorAll('.post-TianliGPT').forEach(el => {
                  el.style.display = 'none';
                });
                info = "Key错误或余额不足，请充值后请求新的文章"
                throw new Error('TianliGPT：' + info);
              case 5:
                info = errorData.err_msg
                tianliGPT.aiShowAnimation(info);
                return info;
              case 6:
                info = errorData.err_msg
                tianliGPT.aiShowAnimation(info);
                return info;
              case 7:
                info = errorData.err_msg
                tianliGPT.aiShowAnimation(info);
                return info;
              default:
                // 默认的处理逻辑
                tianliGPT.aiShowAnimation("未知错误，请检查API文档");
                return "未知错误，请检查API文档";
            }
          }
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          if (window.location.hostname === 'localhost') {
            console.warn('警告：请勿在本地主机上测试 API 密钥。');
            return '获取文章摘要超时。请勿在本地主机上测试 API 密钥。';
          } else {
            console.error('请求超时');
            return '获取文章摘要超时。当你出现这个问题时，可能是key或者绑定的域名不正确。也可能是因为文章过长导致的 AI 运算量过大，您可以稍等一下然后刷新页面重试。';
          }
        } else {
          console.error('请求失败：', error);
          return '获取文章摘要失败，请稍后再试。';
        }
      }
    },

    aiShowAnimation: function(text) {
      const element = document.querySelector(".tianliGPT-explanation");
      if (!element) {
        return;
      }

      if (tianliGPTIsRunning) {
        return;
      }

      // 检查用户是否已定义tianliGPT_typingAnimate并且其值为false
      if (typeof tianliGPT_typingAnimate !== "undefined" && !tianliGPT_typingAnimate) {
        // 如果用户已定义tianliGPT_typingAnimate并且其值为false，则立即显示完整文本
        element.innerHTML = text;
        return;
      }

      tianliGPTIsRunning = true;
      const typingDelay = 25;
      const waitingTime = 1000;
      const punctuationDelayMultiplier = 6;

      element.style.display = "block";
      element.innerHTML = "生成中..." + '<span class="blinking-cursor"></span>';

      //给AItag添加动画
      const aiTag = document.querySelector('.tianliGPT-tag');
      aiTag.classList.add('loadingAI');

      let animationRunning = true;
      let currentIndex = 0;
      let initialAnimation = true;
      let lastUpdateTime = performance.now();

      const animate = () => {
        if (currentIndex < text.length && animationRunning) {
          const currentTime = performance.now();
          const timeDiff = currentTime - lastUpdateTime;

          const letter = text.slice(currentIndex, currentIndex + 1);
          const isPunctuation = /[，。！、？,.!?]/.test(letter);
          const delay = isPunctuation ? typingDelay * punctuationDelayMultiplier : typingDelay;

          if (timeDiff >= delay) {
            element.innerText = text.slice(0, currentIndex + 1);
            lastUpdateTime = currentTime;
            currentIndex++;

            if (currentIndex < text.length) {
              element.innerHTML =
                text.slice(0, currentIndex) +
                '<span class="blinking-cursor"></span>';
            } else {
              element.innerHTML = text;
              element.style.display = "block";
              tianliGPTIsRunning = false;
              observer.disconnect(); // 暂停监听
              //给AItag停止动画
              const aiTag = document.querySelector('.tianliGPT-tag');
              aiTag.classList.remove('loadingAI');
            }
          }
          requestAnimationFrame(animate);
        }
      }

      // 使用IntersectionObserver对象优化ai离开视口后暂停的业务逻辑，提高性能
      const observer = new IntersectionObserver((entries) => {
        let isVisible = entries[0].isIntersecting;
        animationRunning = isVisible; // 标志变量更新
        if (animationRunning && initialAnimation) {
          setTimeout(() => {
            requestAnimationFrame(animate);
          }, 200);
        }
      }, { threshold: 0 });
      let post_ai = document.querySelector('.post-TianliGPT');
      observer.observe(post_ai); //启动新监听
    },
  }
  function runTianliGPT() {
    if (typeof tianliGPT_postSelector === 'undefined') {
      return;
    }

    insertAIDiv(tianliGPT_postSelector);
    const content = tianliGPT.getTitleAndContent();
    if (content) {
      console.log('TianliGPT本次提交的内容为：' + content);
    }
    tianliGPT.fetchTianliGPT(content).then(data => {
      const summary = data.summary;
      tianliGPT.aiShowAnimation(summary);
    })
  }

  function checkURLAndRun() {
    if (typeof tianliGPT_postURL === "undefined") {
      tianliGPTCustomBlackList(); // 如果没有设置自定义 URL，则直接执行 runTianliGPT() 函数
      return;
    }

    try {
      const wildcardToRegExp = (s) => {
        return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
      };

      const regExpEscape = (s) => {
        return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
      };

      const urlPattern = wildcardToRegExp(tianliGPT_postURL);
      const currentURL = window.location.href;

      if (urlPattern.test(currentURL)) {
        attemptRunTianliGPT(); // 使用新函数处理重试逻辑
      } else {
        console.log(`TianliGPT：当前 URL '${currentURL}' 不符合规则 '${tianliGPT_postURL}'，所以我决定不执行摘要功能。`);
      }
    } catch (error) {
      console.error("TianliGPT：我没有看懂你编写的自定义链接规则，所以我决定不执行摘要功能", error);
    }
  }

  function attemptRunTianliGPT() {
    const maxAttempts = 20; // 最多尝试10秒
    let attempts = 0;

    const interval = setInterval(() => {
      try {
        tianliGPTCustomBlackList(); // 尝试执行 runTianliGPT
        clearInterval(interval); // 如果成功，清除定时器
        // console.log("TianliGPT：成功执行！");
      } catch (error) {
        if (attempts >= maxAttempts) {
          clearInterval(interval); // 超过尝试次数，清除定时器
          console.error("TianliGPT：超时失败，停止尝试。", error);
        }
        attempts++;
      }
    }, 200); // 每1秒尝试一次
  }

  function tianliGPTCustomBlackList() {
    if (typeof tianliGPT_blacklist === "undefined" || !tianliGPT_blacklist) {
      runTianliGPT(); // 如果没有设置自定义 URL 或 URL 为空，则直接执行 runTianliGPT() 函数
      return;
    } else {
      // 使用 fetch 请求 JSON 文件
      fetch(tianliGPT_blacklist)
        .then(response => response.json())
        .then(data => {
          const urlList = data.blackurls;  // 假设 JSON 文件中有一个 blackurls 键
          let currentPageUrl = window.location.href;
          let isBlacklisted = urlList.some(pattern => {
            // 将通配符转换为正则表达式
            let regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$");
            return regex.test(currentPageUrl);
          });

          // 如果当前页面 URL 不在黑名单中，则执行 tianliGPT
          if (!isBlacklisted) {
            runTianliGPT();
          }
        })
        .catch(error => {
          console.error('请求黑名单失败。Error fetching blacklist:', error);
          runTianliGPT(); // 请求出错时继续执行 runTianliGPT()
        });
    }
  }

  if (usePjax) {
    checkURLAndRun();
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      checkURLAndRun();
    });
  }
}

tianliGPT(false);

document.addEventListener('pjax:complete', function() {
  tianliGPT(true);
})

  (function(history) {
    var pushState = history.pushState;
    history.pushState = function(state) {
      if (typeof history.onpushstate == "function") {
        setTimeout(function() {
          history.onpushstate({ state: state });
        }, 100);
      }
      // 调用原函数并返回结果
      return pushState.apply(history, arguments);
    };
  })(window.history);

// 现在你可以定义一个onpushstate函数来处理pushState调用
window.history.onpushstate = function(event) {
  // 调用你的统计函数
  tianliGPT(true);
};