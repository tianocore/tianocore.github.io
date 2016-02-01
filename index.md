---
layout: front-page
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
  <a href="{{baseurl}}/contrib/">How to Contribute</a>
  <a href="{{baseurl}}/contrib/getting-started.html">Getting Started</a>
</div>

</div>

<div class="main-page news">

<h2>
  Community News
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
    Read more <a href="news/">community news »</a><br>
  </li>
</ul>

</div>
