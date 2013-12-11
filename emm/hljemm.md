---
layout: emm_item
permalink: /emm/hljemm/
title: "hljemm"
date: "2013-12-11 02:12:52 +0200"
author: wh1100717
version: 1.0.0
categories: [release]
---

##hljemm项目搭建

*	首先在eclipse中新建Dynamic Web Project

![]({{site.url}}/img/hljemm/hljemm1.png)

*	进行项目配置：
	*	项目名称自拟，比如该例子中为hjlemm1
	*	服务器选择tomcat 7.0
	*	选择2.5版本的Dynamic Web Module Version
	*	选择<custom> Configuration
	*	点击Modify勾选Javascript,点击完成生成项目。

![]({{site.url}}/img/hljemm/hljemm2.png)

*	右键点击项目，选择Import

![]({{site.url}}/img/hljemm/hljemm2.png)

*	在Import中进行选择和配置：
	*	选择src和WebContent文件夹
	*	勾选Overwrite existing resources without warning
	*	点击完成

![]({{site.url}}/img/hljemm/hljemm4.png)

*	右键点击项目，选择属性Properties，选择Resources，将Text file encoding改为utf-8

![]({{site.url}}/img/hljemm/hljemm5.png)

*	执行clean操作，具体位置在菜单栏-->Project-->Clean
*	如果已有tomcat服务器，则选择服务器右键点击，选择Add and Remove，将项目添加到服务器中

![]({{site.url}}/img/hljemm/hljemm6.png)

*	如果没有tomcat服务器，则在server标签页里面右键点击空白地方，New-->Server，新建一个服务器

![]({{site.url}}/img/hljemm/hljemm7.png)

*	如图所示去配置tomcat服务器，并点击下一步

![]({{site.url}}/img/hljemm/hljemm8.png)

*	将项目添加到服务器中

![]({{site.url}}/img/hljemm/hljemm9.png)

*	项目用到了sqlite数据库，其指定了一个具体的目录来存放数据库文件，因此需要保证项目数据库文件存放路径是存在的，所以需要建立该路径所需要的文件夹，如图所示：

![]({{site.url}}/img/hljemm/hljemm10.png)

*	启动tomcat，在浏览器中输入以http://localhost:8080/hljemm1/services/listServices查看是否服务启动成功

![]({{site.url}}/img/hljemm/hljemm11.png)

*	点击OrderManage进入具体的wsdl描述页面，复制该链接，在soapUI中将会用到

![]({{site.url}}/img/hljemm/hljemm12.png)

*	启动soapUI，新建一个soapUI Project

![]({{site.url}}/img/hljemm/hljemm13.png)

*	将刚才复制的链接粘帖到Initial WSDL/WADL栏中，ProjectName自己随便起

![]({{site.url}}/img/hljemm/hljemm14.png)

*	点击具体的请求，赋值参数，点击绿色按钮来进行消息测试

![]({{site.url}}/img/hljemm/hljemm15.png)

至此，hljemm项目的搭建就完成了，之后可以利用soapUI对具体的请求、业务逻辑进行熟悉和测试工作。

收工o(∩_∩)o