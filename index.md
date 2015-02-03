---
layout: default
title: Welcome
---
{% include site-links.md %}

[<img src="images/IntroducingUDK2014.png"/>](udk2014/)

<br/>

This is the community site surrounding the open source components of
Intel's implementation of
[UEFI]({{wiki}}/UEFI).
To learn how to use UEFI see our
[start using UEFI]({{wiki}}/start-using-UEFI)
page.

To learn more about getting involved in the community see our
[how to contribute]({{wiki}}/How-To-Contribute)
page. [EDK II] is a modern, feature-rich, cross-platform
firmware development environment for the UEFI and PI specifications.

If you have any comments for this site please see the
[community admins]({{wiki}}/Community_Admins)
page.

For the full list of our community projects, visit the
[Projects]({{wiki}}/Projects)
page.

## News

<ul class="posts">
{% for post in site.posts limit:3 %}
  <li><a href="{{baseurl}}{{ post.url }}">{{ post.title }}</a>, {{ post.date | date: "%B %-d, %Y" }}</li>
{% endfor %}
  <li>Read older <a href="news/">news here</a>, or <a href="news/feed.xml">subscribe with rss</a></li>
</ul>
