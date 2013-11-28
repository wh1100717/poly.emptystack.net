---
layout: python_item
permalink: /python/zoj/
title: "ZOJ"
date: "2013-11-25 02:12:52 +0200"
author: zq920320
version: 1.0.0
categories: [demo]
---

[ZOJ](http://acm.zju.edu.cn/onlinejudge/) 是“浙江大学程序在线评测系统”（Zhejiang University Online Judge）的缩写，是一个提供信息学（算法竞赛）题库及程序评测的网站，构建于Linux平台，始建于2002年，兼容Pascal、C、C++、Python等多种语言。
##注册
只需要点击首页中的[Register](http://acm.zju.edu.cn/onlinejudge/register.do/)完成注册即可
<img src="{{ site.url }}/img/zojregister.jpg" width="650" alt="">
##登陆
在首页中点击[Login](http://acm.zju.edu.cn/onlinejudge/login.do/)即可打开登陆界面，如图所示
<img src="{{ site.url }}/img/zojlogin.jpg" width="650" alt="">
<div class="note info">
  <p>
        <h5>为了以后登陆方便可以将Remember me前的check box选中，方便以后登录时不必再次输入用户名和密码</h5>
  </p>
</div>
##开始答题
点击Problem &rarr; Select Problem 就可以开始答题了 Solved代表你是否完成这道题目，ID代表题号，Title代表题目，Ratio（AC/All）代表通过率
<img src="{{ site.url }}/img/zojproblem.jpg" width="650" alt="">
点击想要作答的题目，以第一题为例，点击[A+B Problem](http://acm.zju.edu.cn/onlinejudge/showProblem.do?problemCode=1001/)
<img src="{{ site.url }}/img/zojexample.jpg"width="650"  alt="">
看懂题并且想好思路之后，点击题目最下方的Submit，这时我们进入到提交答案界面，在Language中我们选择Python，之后在Submit Box中输入你想好的Python代码，点击Submit按钮，完成提交
<img src="{{ site.url }}/img/zojsubmit.jpg" width="650" alt="">
如果提交成功，系统会显示Submit Successfully，同时会告诉你你所提交的Run ID号，并且点击status可以看到你所作答的题目状态
<img src="{{ site.url }}/img/zojsubmitsuccess.jpg" width="650" alt="">
<div class="note info">
  <p>
       <h5>如果找不到您所作答的题目可以点击右上角的search进行详细的查询</h5>
        <img src="{{ site.url }}/img/zojsearch.jpg" alt="">
  </p>
</div>
该状态依次为Run ID，提交时间，判断状态，题目ID，语言，运行时间，运行内存，用户名
<img src="{{ site.url }}/img/zojprostatus1.jpg"  alt="">
<img src="{{ site.url }}/img/zojprostatus2.jpg"  alt="">
<div class="note info">
  <p>
        <h5>常见的Judge Status</h5>
        Accept &rarr; 恭喜你答对了<br>
        Wrong Answer &rarr; 很抱歉答案不对<br>
        Compilation Error &rarr; 编译错误<br>
        Time Limit Exceeded &rarr; 超出限定时间<br>
        Memory Limit Exceeded &rarr; 超出限定内存<br>
        Segmentation Fault &rarr; [段错误](http://baike.baidu.com/link?url=bE0UcYjJibzfNV4OzwfTnvIlwfXQ2ZOGqSxVcJsOmuRdMIr1xCtrqJRav6vonePzaZ9G4OEkMSLK48LmojsdfK)<br>
        Non-zero Exit Code &rarr; （1）没有返回值；（2）没有跳出循环<br>
        Floating point exception &rarr; 浮点数异常
        Output limit exceeded &rarr; 输出限制异常
        presentation error &rarr; 格式错误<br>
  </p>
</div>

