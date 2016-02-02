---
layout: default
title: News
---
{% include site-links.md %}

<a href="feed.xml"><img src="{{baseurl}}/images/feed-icon-28x28.png" style="width: 1em; height: 1em;"></a>
<a href="feed.xml">rss feed</a>

{% for post in site.posts %}
<div class="news-page news-item"></div>

### [{{ post.date | date: "%B %-d, %Y" }}]({{baseurl}}{{ post.url }})
{{ post.content }}
{% endfor %}
