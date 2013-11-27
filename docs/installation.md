---
layout: docs
title: Installation
prev_section: home
next_section: githubusage
permalink: /docs/installation/
---

该文档描述了本地撰写该项目所需要安装的软件以及在不同平台下的安装步骤。开始安装的时候可能需要一些时间来进行配置。
如果安装过程中出现任何问题，可以在QQ群中提出来，我们可以一起研究、解决并更新文档，让安装更便捷。

## Requirements

我们需要一些软件来支持该环境的运行

- [RubyRails](http://www.railsinstaller.org/en)
- [Python](http://www.python.org/)
- Linux, Unix, Mac OS X 或者 Windwos

<div class="note info">
  <h5>在非Windows平台上运行jekyll</h5>
  <p>
    相对来说，在Windows平台搭建环境难度要大一些，并且没有官方的说明文档，所以我们接下来着重介绍Windows平台下
    环境的jekyll的安装过程，其它平台的安装请查看<a href="http://jekyllrb.com/docs/installation/">这里</a>
  </p>
</div>

## Install RubyGems

最好的安装Jekyll的方式就是通过RubyGems安装，在windows下最佳方案是利用rails来安装Ruby以及Ruby所需的工具包。

首先下载[RailsInstaller](http://www.railsinstaller.org/en)，在选择optional Tasks时勾选(Install Git)和(Add executables for Ruby, DevKit and Git to the PATH)

安装完毕后，Rails会提进行Git配置，输入相应用户名和邮箱即可。

在终端执行以下命令来查看是否安装成功：

{% highlight bash %}
$ ruby -v
{% endhighlight %}

安装成功会返回ruby的具体版本信息，否则失败。

## Change Gem Sources

Ruby的默认Gem Sources为http://rubygems.org/，而该源部署在Amazon S3上，由于国内网络原因访问非常不稳定，所以需要更换源，执行以下命令来替换Ruby的默认源：

{% highlight bash %}
$ gem sources --remove http://rubygems.org/
$ gem sources -a http://ruby.taobao.org
{% endhighlight %}

查看默认源是否替换成功

{% highlight bash %}
$ gem sources -l
{% endhighlight %}

如果说明源替换成功,则显示为：

{% highlight bash %}
*** CURRENT SOURCES ***

http://ruby.taobao.org/
{% endhighlight %}

## Jekyll Installation

该项目采用Jekyll转换器，其可以将多种标签的标记语言转换成最终的HTML文档格式并在GitHub编译运行。为了在本地测试所编写的文档，需要在本地安装Jekyll。

首先利用刚才安装的gems来进行jekyll的安装，具体命令如下：

{% highlight bash %}
$ gem install jekyll
$ gem install rdiscount kramdown wdm
{% endhighlight %}

安装完毕后，通过以下命令查看是否安装成功：

{% highlight bash %}
$ jekyll -v
{% endhighlight %}

## Python Installation

由于Jekyll转换器使用了pygments来对Markdown语言进行转换，Jekyll默认支持Pygments的版本为0.5.0，但是在安装rails的时候自带的版本是0.5.4，并且关联插件也并没有安装，所以需要重新安装pygments及其dependency。

Pygments只支持easy_install安装，而easy_install是用Python编写的脚本工具，所以为了安装Pygments需要先安装Python。

下载并安装[Python](http://www.python.org/)，安装后在系统环境变量PATH中[配置Python相关的环境变量](http://blog.csdn.net/liguo9860/article/details/6829610)，可以通过以下命令查看是否安装并配置成功(注意：是大写的-V)：

{% highlight bash %}
$ python -V
{% endhighlight %}

接下来进行easy_install的安装。

easy_install实际上setupTools里面的一个工具，我们需要安装setuptools。下载脚本[ez_setup.py](https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py)至本地，例如D盘根目录。

在命令行执行如下代码来安装setupTools

{% highlight bash %}
$ python d:/ez_setup.py
{% endhighlight %}

在运行的时候会发生一个错误，该错误为"ascii codec can't decode byte 0xe8 in position 0:ordinal not in range(128)"，大概意思是ascii编码不能解析byte 0xe8，

解决方式为：找到并打开python根目录/Lib/mimetypes.py文件，在代码import结束后，添加代码

{% highlight python %}
reload(sys)
sys.setdefaultencoding('gbk')
{% endhighlight %}

即把默认编码方式改为gbk(网上有写用utf8的，在这个脚本中是无效的，需要改成gbk格式)。重新运行，如果出现刷屏的安装信息，则说明安装成功了。此时，在python目录下多了一个Script文件夹，easy_install就在里面。

接下来进入easy_install所在的文件夹及Python跟目录/Scripts执行以下命令进行pygments关联插件的安装：

{% highlight bash %}
C:\Python27\Scripts> easy_install.exe Pygments
{% endhighlight %}

接下来更改Pygments的版本:

{% highlight bash %}
$ gem uninstall pygments.rb --version "=0.5.4"
$ gem install pygments.rb --version "=0.5.0"
{% endhighlight %}

通过以下命令来查看pygments版本是否更换为0.5.0：

{% highlight bash %}
$ gem list
{% endhighlight %}

至此，在Windows平台上，基本的环境已经搭建起来了。接下来会具体讲解如何应用GitHub来获取最新的文档