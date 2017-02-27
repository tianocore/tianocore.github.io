---
layout: front-page
title: 欢迎
---
{% include site-links.md %}

<!-- parse_block_html causes the markdown to be processed inside <div> -->
{::options parse_block_html="true" /}

<div class="main-page content">

# 欢迎访问UEFI开源社区中文站（非官方）

This is the community site surrounding the open source components of
Intel's implementation of [UEFI]({{wiki}}/UEFI). Our [EDK II] is a
modern, feature-rich, cross-platform firmware development environment
for the UEFI and PI specifications. We hope that you'll delve into our
work, get excited to use Tianocore, and contribute to the community.
本开源社区围绕英特尔的[UEFI]({{wiki}}/UEFI)实现开源部分展开。我们的[EDK II]是一个关于UEFI和PI规范的现代化、功能丰富、跨平台的固件开发环境。我们希望你能深入探索我们的工作、感动于Tianocore(当然还有Tianocore非官方中文)，并为社区的发展添砖加瓦。
<div id="buttons">
  <a href="{{baseurl}}/contrib/">如何贡献</a>
  <a href="{{baseurl}}/contrib/getting-started.html">着手第一步</a>
</div>

</div>

<div class="main-page news">

<h2>
  社区新闻
  <a href="news/feed.xml" style="float: right;">
    <img src="{{baseurl}}/images/feed-icon-28x28.png" style="width: 1em; height: 1em;">
  </a>
</h2>

<ul class="posts">
{% for post in site.posts limit:3 %}
  <li>
    <a href="{{baseurl}}{{ post.url }}">{{ post.title }}</a><br>
    {{ post.date | date: "%B %-d, %Y" }}
  </li>
{% endfor %}
  <li style="border-bottom: none;">
    Read more <a href="news/">社区新闻 »</a><br>
  </li>
</ul>

</div>

