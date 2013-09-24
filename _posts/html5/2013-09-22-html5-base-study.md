---
layout: post
title: "html5入门学习"
tagline: "HTML5的时代即将到来,让我们张开怀抱开始迎接web3.0时代的到来吧"
category: html5
tags: ['html5基础',web]
slug: html5
---
<section id="video">
##html5--视频篇
HTML5新增了 video 元素来包含视频的标准方法.这个方法彻底摆脱flash,页面照样可以正常嵌入视频为了见,是不是很酷!!  
以下是各个浏览器版本对相应的视频格式支持情况:  

<table class="table table-striped">
<tbody><tr>
<th>格式</th>
<th>IE</th>
<th>Firefox</th>
<th>Opera</th>
<th>Chrome</th>
<th>Safari</th>
</tr>
<tr>
<td>Ogg</td>
<td>No</td>
<td>3.5+</td>
<td>10.5+</td>
<td>5.0+</td>
<td>No</td>
</tr>
<tr>
<td>MPEG 4</td>
<td>9.0+</td>
<td>No</td>
<td>No</td>
<td>5.0+</td>
<td>3.0+</td>
</tr>
<tr>
<td>WebM</td>
<td>No</td>
<td>4.0+</td>
<td>10.6+</td>
<td>6.0+</td>
<td>No</td>
</tr>
</tbody></table>

<em id="demo">以下为代码演示</em>

<div style="text-align:center;">
  <button onclick="playPause()">播放/暂停</button> 
  <button onclick="makeBig()">大</button>
  <button onclick="makeNormal()">中</button>
  <button onclick="makeSmall()">小</button>
  <br/> 
  <video id="video1" width="420" style="margin-top:15px;">
  <source src="/assets/example/html5/mov_bbb.ogg" type="video/ogg" />
  Your browser does not support HTML5 video.
  </video>
</div>

<script type="text/javascript">
  var myVideo=document.getElementById("video1");

  function playPause()
  { 
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  } 

  function makeBig()
  { 
    myVideo.width+=60; 
  } 

  function makeSmall()
  { 
    myVideo.width-=20; 
  } 

  function makeNormal()
  { 
    myVideo.width=420; 
  } 
</script>

`html代码`  
{% highlight html linenos %}
<div style="text-align:center;">
  <button onclick="playPause()">播放/暂停</button> 
  <button onclick="makeBig()">大</button>
  <button onclick="makeNormal()">中</button>
  <button onclick="makeSmall()">小</button>
  <br/> 
  <video id="video1" width="420" style="margin-top:15px;">
	<source src="/example/html5/mov_bbb.mp4" type="video/mp4" />
	<source src="/example/html5/mov_bbb.ogg" type="video/ogg" />
	Your browser does not support HTML5 video.
  </video>
</div>
{% endhighlight %}
`javascript代码`  
{% highlight javascript linenos %}
  var myVideo=document.getElementById("video1");

  function playPause()
  { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
  } 

  function makeBig()
  { 
    myVideo.width+=60; 
  } 

  function makeSmall()
  { 
    myVideo.width-=20; 
  } 

  function makeNormal()
  { 
    myVideo.width=420; 
  } 
{% endhighlight %}
</section>
{% include JB/setup %}