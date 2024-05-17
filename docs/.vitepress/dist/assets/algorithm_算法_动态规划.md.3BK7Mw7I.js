import{_ as a,c as l,o as e,a9 as i}from"./chunks/framework.G_nFLsES.js";const t="/assets/blog-2024-03-22-22-59-05.X5iKb5se.png",m=JSON.parse('{"title":"动态规划","description":"","frontmatter":{"title":"动态规划","tags":["算法","动态规划"],"categories":[["算法","动态规划"]],"abbrlink":"a80d0031","date":"2024-03-22T22:46:35.000Z"},"headers":[],"relativePath":"algorithm/算法/动态规划.md","filePath":"algorithm/算法/动态规划.md","lastUpdated":1715952728000}'),r={name:"algorithm/算法/动态规划.md"},s=i(`<h1 id="什么是动态规划" tabindex="-1">什么是动态规划 <a class="header-anchor" href="#什么是动态规划" aria-label="Permalink to &quot;什么是动态规划&quot;">​</a></h1><ul><li><a href="#什么是动态规划">什么是动态规划</a><ul><li><a href="#动态规划适用情况与场景">动态规划适用情况与场景</a></li><li><a href="#动态规划解题步骤">动态规划解题步骤</a></li><li><a href="#步骤一定义子问题">步骤一、定义子问题</a></li><li><a href="#步骤二写出子问题的递推关系">步骤二、写出子问题的递推关系</a></li><li><a href="#步骤三确定-dp-数组的计算顺序">步骤三、确定 DP 数组的计算顺序</a></li><li><a href="#步骤四空间优化">步骤四、空间优化</a></li></ul></li></ul><ul><li>分治方法将问题划分为互不相交的子问题，递归的求解子问题，再将它们的解组合起来，求出原问题的解。</li><li>动态规划将复杂的问题分解为若干子问题，通过综合子问题的最优解来得到原问题的最优解,并将每个求解过的子问题记录下来，这样下次碰到相同的子问题，就可以直接使用之前记录的结果，而不重复计算。</li></ul><h2 id="动态规划适用情况与场景" tabindex="-1">动态规划适用情况与场景 <a class="header-anchor" href="#动态规划适用情况与场景" aria-label="Permalink to &quot;动态规划适用情况与场景&quot;">​</a></h2><ul><li><strong>适用情况:</strong> 一个问题必须拥有重叠子问题和最优子结构，才能使用动态规划去解决</li><li><strong>适用场景:</strong> 最大值/最小值, 可不可行, 是不是，方案个数</li></ul><h2 id="动态规划解题步骤" tabindex="-1">动态规划解题步骤 <a class="header-anchor" href="#动态规划解题步骤" aria-label="Permalink to &quot;动态规划解题步骤&quot;">​</a></h2><ol><li>定义子问题</li><li>写出子问题的递推关系</li><li>确定 DP 数组的计算顺序</li><li>空间优化（可选）</li></ol><h2 id="步骤一、定义子问题" tabindex="-1">步骤一、定义子问题 <a class="header-anchor" href="#步骤一、定义子问题" aria-label="Permalink to &quot;步骤一、定义子问题&quot;">​</a></h2><p>子问题是和原问题相似，但规模较小的问题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例：</span></span>
<span class="line"><span>  原问题「从全部房子中能偷到的最大金额」→ 子问题「从k个房子中能偷到的最大金额」</span></span></code></pre></div><p>子问题需要具备以下两个性质：</p><ul><li>原问题要能由子问题表示</li><li>一个子问题的解要能通过其他子问题的解求出</li></ul><h2 id="步骤二、写出子问题的递推关系" tabindex="-1">步骤二、写出子问题的递推关系 <a class="header-anchor" href="#步骤二、写出子问题的递推关系" aria-label="Permalink to &quot;步骤二、写出子问题的递推关系&quot;">​</a></h2><p><img src="`+t+'" alt="子问题的递推关系"></p><h2 id="步骤三、确定-dp-数组的计算顺序" tabindex="-1">步骤三、确定 DP 数组的计算顺序 <a class="header-anchor" href="#步骤三、确定-dp-数组的计算顺序" aria-label="Permalink to &quot;步骤三、确定 DP 数组的计算顺序&quot;">​</a></h2><p>动态规划有两种计算顺序：</p><ul><li>一种是自顶向下的、使用备忘录的递归方法</li><li>一种是自底向上的、使用 DP 数组的循环方法</li></ul><p>不过在普通的动态规划题目中，99% 的情况我们用循环方法就很好解决，<strong>所以我们最好在一开始就坚持自底向上方法</strong>，使用 DP 数组，这样才有助于领悟动态规划的真正精髓。</p><h2 id="步骤四、空间优化" tabindex="-1">步骤四、空间优化 <a class="header-anchor" href="#步骤四、空间优化" aria-label="Permalink to &quot;步骤四、空间优化&quot;">​</a></h2><p>空间优化的基本原理是，<strong>很多时候我们并不需要始终持有全部的 DP 数组。</strong></p>',20),o=[s];function n(h,d,c,p,u,_){return e(),l("div",null,o)}const b=a(r,[["render",n]]);export{m as __pageData,b as default};
