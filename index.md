---
layout: home
desc: 首页
title: zozorz的技术学习分享博客
tagline: 记录,分享,成长
---
{% include JB/setup %}
<div class="jumbotron masthead">
  <div class="container">
    <h1><a href="/"><img src="/assets/img/logo.png" title="zozorz.com"/></a></h1>
    <p>记录,分享,留住生活中的感动</p>
    <p>
      <a href="/categories.html" class="btn btn-success btn-large">学习笔记</a>
    </p>
    <ul class="masthead-links">
      <li>
        <a href="https://github.com/zoorz/tech.zozorz.com" onclick="_gaq.push(['_trackEvent', 'Jumbotron actions', 'Jumbotron links', 'GitHub project']);">Fork On Github</a>
      </li>
      <li>
        Version 0.1.1
      </li>
    </ul>
  </div>
</div>

<div class="bs-docs-social">
  <div class="container">
    <ul class="bs-docs-social-buttons">
      <li class="follow-btn">
        <a href="http://weibo.com/u/1946129050?s=6uyXnP" target="_blank"><img border="0" src="/assets/img/Sina_Weibo_Logo_RGB_C_E.png" height="34px"/></a>
      </li>
      <li class="follow-btn">
        <a href="https://plus.google.com/106097479552219420754" target="_blank"><img border="0" src="/assets/img/googleplus_color.png"/></a>
      </li>
    </ul>
  </div>
</div>

<div class="container-fluid">
  <div class="marketing">
    <h1>学习之路</h1>
    <p class="marketing-byline">
    关注互联网前沿技术,投入学习... 用我的Style开始我的StudyLife
    </p>
    {% assign timeline_config = '{ width: "100%", height: "520", start_at_end: true, source: "https://docs.google.com/spreadsheet/pub?key=0AoBfTlhssqnidEtBSjJ4ZHpqNFBudTRYbFVYOUhkTWc&amp;output=html" }' %}
    {% include JB/timelineJS %}
    <hr class="soften">
  </div>
</div>
<div class="container">
  <div class="marketing">
    <h1>TODO MORE.</h1>
    <p class="marketing-byline">生命不息,折腾不止,我想我们还有很多可以做,也有很多要去做.Just Do It!</p>
    <div class="row-fluid">
    <ul class="thumbnails">
            <li class="span4">
              <ul class="thumbnails">
                <li class="span7 bt-thumbnail"><img data-src="holder.js/220x150/main-45/text:湾" alt="zozorz"></li>
                <li class="span5 bt-thumbnail"><img data-src="holder.js/180x150/green-45/text:玩" alt="zozorz"></li>
                <li class="span6 bt-thumbnail" style="margin-left:0"><img data-src="holder.js/200x180/orange-45/text:碗" alt="zozorz"></li>
                <li class="span6 bt-thumbnail"><img data-src="holder.js/200x180/blue-45/text:腕" alt="zozorz"></li>
              </ul>
            </li>
            <li class="span6">
                <div class="bt-thumbnail">
                <div id="douban-radio">
                  <iframe src='http://douban.fm/partner/baidu/doubanradio' width='420' height='180' frameborder='0'> </iframe>
                </div>
                </div>
            </li>
            <li class="span2">
              <a href="#" class="bt-thumbnail">
                <img data-src="holder.js/160x180/pink-25/text:NodeJS" alt="nodejs">
              </a>
            </li>
            <li class="span3">
              <a href="#" class="bt-thumbnail">
                <img data-src="holder.js/258x145/social-30/text:敏捷开发" alt="敏捷开发">
              </a>
            </li>
            <li class="span3">
              <a href="#" class="bt-thumbnail">
                <img data-src="holder.js/258x145/industrial-30/text:设计模式" alt="设计模式">
              </a>
            </li>
            <li class="span2">
              <a href="#" class="bt-thumbnail">
                <img data-src="holder.js/160x145/grey/text:更多期待.." alt="期待">
              </a>
            </li>
      </ul>
    </div>
  </div>
</div>


