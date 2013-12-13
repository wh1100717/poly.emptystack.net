---
layout: emm_item
permalink: /emm/goagent/
title: "GoAgent Configuration"
date: "2013-12-13 02:12:52 +0200"
author: zq920320
version: 1.0.0
categories: [RELEASE]
---

#GoAgent安装教程
**GoAgent**是一个基于Google Appengine的，全面兼容IE，FireFox，chrome的代理工具，使用Python和Google App EngineSDK编写，程序可以在MicrosoftWindows，Mac，Linux，Android，iPod Touch，iPhone，iPad，webOS，OpenWrt，Maemo上使用。GoAgent出口地址使用的是美国加利福尼亚州山景城Google数据中心IP段。

##一、申请Google App Engine并创建appid
* 申请注册一个**Google App Engine**账号[点击这里注册](https://appengine.google.com)。没有Gmail账号先注册一个， 用你的Gmaill账号登录。<br>
* 登录之后，自动转向**Application**注册页面，如下图：<br>
![](http://ww1.sinaimg.cn/large/786e2887tw1e4thu8o1tuj20hs067mxn.jpg)<br>
* 接下来的页面，输入你的手机号码，需要注意的是，手机号码前面要+86（中国区号） 格式如：+86 13888888888。<br>
![](http://ww2.sinaimg.cn/large/786e2887tw1e4thubjc3yj20hs07dmxw.jpg)<br>
然后等待收取手机短信，收到短信后（一串数字号码）填入下图表单，点send提交.。<br>
![](http://ww1.sinaimg.cn/large/786e2887tw1e4thucmsi5j20hc0743z5.jpg)<br>
* 提交完成之后，GAE账号即被激活，然后就可以创建新的应用程序了。填写新应用的必要信息，如下图。在图中第一处添加一个应用名称，如abc555,验证一下是否可用，如果显示“Yes”那么abc555就是你的Appid（记住这个id），而abc555.appspot.com就是你的应用服务器地址了。第二个空可随便填，点击Create Application按钮提交<br>
![](http://ww2.sinaimg.cn/large/786e2887tw1e2s3t7k4v9j.jpg?craete-app.png)<br>
提交之后，就能看到下图这个页面，就说明你已经成功创建了一个新的应用,你也可以点击应用名称，进入控制面板进行管理。<br>
![](http://ww4.sinaimg.cn/large/786e2887tw1e4thubz37cj20go049t8w.jpg)<br>

##二、下载GoAgent并上传至Google App Engine
* 下载GoAgent并解压
 * [GoAgent官方下载链接](http://goo.gl/qFyRk)<br>
 * [网盘链接](http://pan.baidu.com/s/13oRlq): /polysaas/代理软件/客户端下载.zip<br>
 * [GoAgent项目地址](https://code.google.com/p/goagent/)<br>
* 上传
 * 双击server文件夹下的upload.bat，输入你上步创建的appid（同时上传多appid在appid之间用 | 隔开,一次只能上传同一个谷歌帐户下的appid）填完按回车。根据提示填你的谷歌帐户邮箱地址，填完按回车。根据提示填你的谷歌帐户密码(注意：如果开启了两步验证，密码应为16位的应用程序专用密码而非谷歌帐户密码），填完按回车。<br>
![](http://ww4.sinaimg.cn/large/786e2887jw9e7n5u3iijqj20iq0c8q6b.jpg)<br>
 上传成功就会看图下图界面<br>
![](http://ww1.sinaimg.cn/large/786e2887jw1e3bnmhap9wj.jpg?uploaded.png)<br>
* 上传成功后编辑local\proxy.ini，把其中appid = goagent中的goagent 改成你已经上传成功的应用的appid (用windows的记事本也可以）
##三、Chrome浏览器配置
* 安装扩展
 * 地址栏输入chrome://extensions/后按回车，打开扩展管理页，将local文件夹中的SwitchySharp.crx拖拽到该页面之后点击确定即可安装<br>
![](http://ww4.sinaimg.cn/large/786e2887tw1e3hhmzjy1zj.jpg?install_Proxy_Switchy_Sharp.png)<br>
* 导入设置
 * 点击 Proxy SwitchySharp图标》选项》倒入/导出》<br>
 ![](http://ww1.sinaimg.cn/large/786e2887jw1e2s44kpzqyj.jpg?bak.png)<br>
 * 浏览到SwitchyOptions.bak，点击确定导入设置
 * 更新自动切换规则（如果遇到无法更新规则列表，可以先运行**goagent**，并把浏览器代理设置为**GoAgent**模式再更新规则，不更新规则只会影响自动切换模式，不会影响其他模式的使用，若确实无法更新也可不更新，直接使用PAC模式即可）
 * 在扩展设置页点击“切换规则”，点击“立即更新列表”，最后点击“保存”。<br>
![](http://ww4.sinaimg.cn/large/786e2887tw1e2s3tcf8lij.jpg?getrules.png)<br>
 * 单击地址栏右侧Proxy SwitchySharp图标即可进行模式选择<br>
![](http://ww2.sinaimg.cn/large/786e2887tw1e2s3t6x2ivj.jpg?changemode.png)<br>
 * **GoAgent**模式 除匹配proxy.ini中sites的直连外，其他全部通过GAE
 * **GoAgent PAAS**模式 全部通过PAAS
 * **GoAgent Socks5**模式 全部通过Socks5（暂不可用）
 * 自动切换模式 根据切换规则自动选择是否进行代理，自动选择使用何种代理