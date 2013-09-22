---
layout: post
title: "html5入门学习"
tagline: "HTML5的时代即将到来,让我们张开怀抱开始迎接web3.0时代的到来吧"
category: html5
tags: [html5,web]
---
##html5--视频篇

{% highlight html %}

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

{% endhighlight %}

{% include JB/setup %}