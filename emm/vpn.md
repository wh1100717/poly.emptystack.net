---
layout: emm_item
permalink: /emm/vpn/
title: "VPN Connection"
date: "2013-12-09 02:12:52 +0200"
author: wh1100717
version: 1.0.0
categories: [demo]
---

<div class="note info">
  <h5>关于XP和Win7系统</h5>
  <p>XP和WIN7的VPN连接选项位置有所区别，但是不影响配置方式，按照截图所给的进行配置即可。</p>
</div>

1. 建立VPN连接<br>
![]({{site.url}}/img/vpn/vpn.png)
2. 选择使用Internet连接VPN<br>
![]({{site.url}}/img/vpn/vpn2.png)
3. 输入具体的IP地址(申请可以获知)，名称可以随便填，比如Polysaas<br>
![]({{site.url}}/img/vpn/vpn3.png)
4. 输入申请得到的用户名和密码，点击连接<br>
![]({{site.url}}/img/vpn/vpn4.png)
5. 点击跳过，进行VPN配置<br>
![]({{site.url}}/img/vpn/vpn5.png)
6. 如图所示进行配置（注意：在XP系统中，需要选择高级(自定义设置)--设置才能进行相关设置，并且VPN类型在网络标签下，而不是VPN标签下），点击确定即可完成配置。<br>
![]({{site.url}}/img/vpn/vpn6.png)
<div class="note">
  <h5>错误789:l2tp 连接尝试失败的解决方案</h5>
    <p>1. 单击“开始”，单击“运行”，键入“regedit”，然后单击“确定”</p>
    <p>2. 找到下面的注册表子项，然后单击它：</p>
    <p>HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Rasman\Parameters</p>
    <p>3. 在“编辑”菜单上，单击“新建”->“DWORD值”</p>
    <p>4. 在“名称”框中，键入“ProhibitIpSec”</p>
    <p>5. 在“数值数据”框中，键入“1”，然后单击“确定”</p>
    <p>6. 退出注册表编辑器，然后重新启动计算机</p>
</div>
7. 双击网络--TCP/IP协议，选择高级，将网络上使用默认网关选项去掉。<br>
![]({{site.url}}/img/vpn/vpn8.jpg)
8. 完成配置以后就可以通过申请的帐号和密码进行VPN连接了。但是连接上以后只能访问公司内网，无法访问外网，所以还需要进行路由配置来确保内外网都能正常访问<br>
    连接VPN以后，在cmd控制台输入`ipconfig`查看VPN的IP地址是多少，然后执行
{% highlight bash %}
route add 192.168.1.0 mask 255.255.255.0 自己的IP地址
{% endhighlight %}
9.链接某些ip连不上时。<br>
管理员身份进入命令处理器<br>
通过route print查看 活动路由中 接口在链路上的ip<br>
![]({{site.url}}/img/vpn/vpn9.jpg)
{% highlight bash %}
route add 192.168.1.0 mask 255.255.255.0 查到的IP
{% endhighlight %}
