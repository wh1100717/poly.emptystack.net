---
layout: docs_item
title: Installation
prev_section: invovled
next_section: githubusage
permalink: /docs/installation/
---

>该文档描述了本地撰写该项目所需要安装的软件以及在不同平台下的安装步骤。开始安装的时候可能需要一些时间来进行配置。
>
>如果安装过程中出现任何问题，可以在QQ群中提出来，我们可以一起研究、解决并更新文档，让安装更便捷。

## Requirements
-------------------------------------------
我们需要一些软件来支持该环境的运行

* [RubyRails](http://www.railsinstaller.org/en)
* [Python](http://www.python.org/)
* Linux, Unix, Mac OS X 或者 Windwos

<div class="note info">
  <h5>在非Windows平台上运行jekyll</h5>
  <p>
    相对来说，在Windows平台搭建环境难度要大一些，并且没有官方的说明文档，所以我们接下来着重介绍Windows平台下环境的jekyll的安装过程，其它平台的安装请查看<a href="http://jekyllrb.com/docs/installation/">这里</a>
  </p>
</div>

## 安装RubyGems
-------------------------------------------
安装Jekyll最好的方式就是通过RubyGems安装，在Windows下最佳方案是利用Rails来安装Ruby以及Ruby所需的工具包。

* 首先下载[RailsInstaller](http://www.railsinstaller.org/en)
* 在选择optional Tasks时勾选(Install Git)和(Add executables for Ruby, DevKit and Git to the PATH)选项
* 安装完毕后，Rails会提进行Git配置，输入相应用户名和邮箱即可
* 在终端执行`$ ruby -v`来查看是否安装成功，安装成功会返回ruby的具体版本信息

## 更改Gem源
-------------------------------------------
Ruby的默认Gem Sources为http://rubygems.org/，而该源部署在Amazon S3上，由于国内网络原因访问非常不稳定，所以需要更换源，执行以下命令来替换Ruby的默认源：

{% highlight bash %}
$ gem sources --remove http://rubygems.org/
$ gem sources -a http://ruby.taobao.org
{% endhighlight %}

终端输入`$ gem sources -l`查看默认源是否替换成功，成功则显示为:

{% highlight bash %}
*** CURRENT SOURCES ***
http://ruby.taobao.org/
{% endhighlight %}

## 安装Jekyll
-------------------------------------------
该项目采用Jekyll转换器，可以将多种标签的标记语言转换成最终的HTML文档格式并在GitHub编译运行。为了在本地测试所编写的文档，需要在本地安装Jekyll。

利用gems进行jekyll的安装，具体命令如下，`$ jekyll -v`查看是否安装成功

{% highlight bash %}
$ gem install jekyll
$ gem install rdiscount kramdown wdm
{% endhighlight %}

## 安装Python
-------------------------------------------
Jekyll转换器使用了pygments实现对多种程序代码类型的格式转换及上色支持，Jekyll默认支持Pygments的版本为0.5.0，但是在安装rails的时候自带的版本是0.5.4，并且部分Dependencies也没有安装，所以需要重新安装pygments及其dependencies。

Pygments支持easy\_install安装，而easy\_install是用Python编写的脚本工具，所以为了安装Pygments需要先安装Python。

* 下载并安装[Python](http://www.python.org/)
* 安装后在系统环境变量PATH中[配置Python相关的环境变量](http://blog.csdn.net/liguo9860/article/details/6829610)
* `$ python -V`查看是否安装并配置成功（注意：是大写的-V）
* easy\_install实际上是setupTools里面的一个子工具，我们需要安装SetupTools来包含easy\_install工具
* 下载脚本[ez_setup.py](https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py)至本地，例如D盘根目录
* 终端执行`$ python d:/ez_setup.py`进行SetupTools的安装

在运行的时候会发生一个错误，该错误为

{% highlight bash %}
ascii codec can't decode byte 0xe8 
in position 0:ordinal not in range(128)
{% endhighlight %}

大意为ascii编码不能解析byte 0xe8。解决方法：找到并打开python根目录/Lib/mimetypes.py文件，在`import urllib`后，添加代码:

{% highlight python %}
reload(sys)
sys.setdefaultencoding('gbk')
{% endhighlight %}

把默认编码方式改为gbk（网上有写用utf8的，在这个脚本中是无效的，需要改成gbk格式）。重新执行`$ python d:/ez_setup.py`，如果出现刷屏的安装信息，则说明安装成功了。此时，在python目录下多了一个Script文件夹，easy\_install就在里面。

执行`$ gem list`来查看pygments版本，如果没有执行

{% highlight bash %}
C:\Python27\Scripts> easy_install.exe Pygments
{% endhighlight %}

如果存在pygments,并且版本不为"0.5.0"接下来更改Pygments的版本:

{% highlight bash %}
$ gem uninstall pygments.rb --version "=0.5.4"
$ gem install pygments.rb --version "=0.5.0"
{% endhighlight %}

执行`$ gem list`来查看pygments版本是否更换为0.5.0

至此，Windows平台上基本环境的搭建就完成了。<br>
接下来会具体讲解如何应用GitHub来获取最新的项目和文档。
