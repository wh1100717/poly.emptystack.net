---
layout: emm_item
permalink: /emm/axis2/
title: "Axis2"
date: "2013-12-09 02:12:52 +0200"
author: wh1100717
version: 1.0.0
categories: [demo]
---

##Axis2 WAR发布版文件目录结构
可以在[WAR Distribution]中找到axis2.war。

Axis2服务器端作为一个J2EE的应用，拥有如下所示的目录结构：

	axis2-web 
	META-INF
	WEB-INF
	    classes 
	    conf
	        axis2.xml 
	    lib
	        activation.jar
	        ...
	        xmlSchema.jar
	    modules
	        modules.list 
	        addressing.mar
	        ...
	        soapmonitor.mar
	    services
	        services.list
	        aservice.aar
	        ...
	        version.aar
	    web.xml

axis2-web集合了一些JSP文件成为了一个Axis2管理应用。通过它您可以执行所需要的操作，例如增加服务，开启或者关闭模块等。WEB-INF目录下是真正的Axis2应用，包括了所有的jar文件、包含的模块，甚至部署的应用本身。

classes文件夹包含了所有的Axis2本身需要的类或者property文件，例如log4j.properties。所有由系统来处理的服务都以axis文档或者*.aar文件的形式主流在services目录下。该文件包含与服务相关的所有类，以及services.xml文件。services.xml文件控制额外要求，例如定义消息发送器和消息接收器等。

所有文件中最重要的是axis2.xml，其控制应用如何处理接收到的消息。该文件定义了消息接收器和transport接收器，同时也定义了transport发送器并决定哪一个模块被激活。其定义了阶段的顺序以及不同阶段由什么handler来执行和处理。

您可以利用web应用来空盒子所有的信息，但是如果您重启Axis2应用，这些改变将会消失，服务器将会按照axis2.xml文件中定义的配置回滚。

Axis2也提供了第三种发布版--源代码发布版，其使您可以自己生成对应的.war文件。


[WAR Distribution]:http://axis.apache.org/axis2/java/core/download.cgi