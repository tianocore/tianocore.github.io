---
layout: default
title: Welcome
---
{% include site-links.md %}

<!-- parse_block_html causes the markdown to be processed inside <div> -->
{::options parse_block_html="true" /}

<div class="main-page content">

# Welcome to the open source community of UEFI

This is the community site surrounding the open source components of
Intel's implementation of [UEFI]({{wiki}}/UEFI). Our [EDK II] is a
modern, feature-rich, cross-platform firmware development environment
for the UEFI and PI specifications. We hope that you'll delve into our
work, get excited to use Tianocore, and contribute to the community.

<div id="buttons">
  <a href="https://github.com/tianocore/tianocore.github.io/wiki/How_To_Contribute" target="_blank">How to Contribute</a>
  <a href="https://github.com/tianocore/tianocore.github.io/wiki/Getting_Started" target="_blank">Getting Started</a>
</div>

</div>

<div class="main-page news">

## Community News

<ul class="posts">
{% for post in site.posts limit:3 %}
  <li>
    <a href="{{baseurl}}{{ post.url }}">{{ post.title }}</a><br>
    {{ post.date | date: "%B %-d, %Y" }}
  </li>
{% endfor %}
  <li>
    Read more <a href="news/">community news »</a><br>
    Subscribe with <a href="news/feed.xml">rss</a>
  </li>
</ul>

</div>
