---
layout: docs
title: GitHub Usage
prev_section: installation
next_section: jekyllusage
permalink: /docs/githubusage/
---

Github提供了一个强大的版本控制平台，我们可以通过Github来查看项目历史及更改内容，甚至每个成员的贡献度和提交频率。

Github Pages提供了服务器支持，我们可以免费在这里发布自己的文档项目。其内置了Jekyll转换器引擎，使得我们不需要自行申请服务器并配置服务器环境。

该文档记录了Github的简单使用规则和一些了解Github的途径和资源。

## GitHub Installation

可以通过[GitHub for Windows](http://windows.github.com/)来安装并通过界面的方式来使用GitHub，你也可以通过输入命令的方式来控制你的操作。请查看下列文档来熟悉GitHub:
* [Set Up Git](https://help.github.com/articles/set-up-git)
* [Create Repositories](https://help.github.com/create-a-repo)
* [Fork A Repo](https://help.github.com/articles/fork-a-repo)
* [Git Help](https://help.github.com/)

当你不是一个Geek，也对命令行神马的不感兴趣的时候，以下教程可能会使你对Github的操作变得异常简单，下面我来介绍以下如何用[Netbeans](https://netbeans.org/)控制Github。

## Netbeans Integrated with GitHub

首先需要下载最新版本的[Netbeans](https://netbeans.org/)，选择适合自己版本的Netbeans IDE(建议下载ALL版本的)，在安装Netbeans之前需要首先安装不低于v1.7的[JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)。
安装过程非常简单，[使用方法](https://netbeans.org/kb/docs/java/quickstart.html)不在本文讨论之范围之内。

选择团队开发->Git->克隆，在资源库URL中输入

{% highlight bash %}
https://github.com/wh1100717/PolyTechDocs.git
{% endhighlight %}

用户名口令为自己的Github帐号和密码

<div class="note info">
  <h5>关于Github帐号和密码</h5>
  <p>任何一个人都可以Fork该项目，但是修改后想提交该项目必须是该项目小组的成员，否则没有这个权限。想加入该项目小组，请在QQ群99496674中进行申请o(∩_∩)o</p>
</div>

远程分支选择：gh-pages

目标目录选项中，远程名称指的是你所提交的代码在Github上显示的名称，另外需要将“克隆后扫描NetBeans项目”选项勾选上

克隆完毕后，选择打开项目，该项目就加入到了Netbeans的项目列表中，接下来就可以进行查看和编辑项目了。

## GitHub Operations

这里只介绍一些简单的GitHub版本控制操作，详细资料请查看[这里](https://netbeans.org/kb/docs/ide/git_zh_CN.html)

操作分为本地操作(提交、比较、还原、从提交中排除)，远程操作(提取、推入)

本地操作指的是不会去访问远程分支的操作，只是在本地进行版本控制、还原、检查文档内容等操作：

- Submit(提交)：将更改的内容提交到本地版本控制库中，该操作并不更改远程项目的内容，只是在本地形成了一个版本库队列，等待执行远程推入操作。
- Compare(比较)：用来比较当前文件和上一版本的内容上的差别
- Revert(还原)：分为还原修改和还原提交，还原修改指的是将所修改的文件还原成上次提取远程版本库的状态。
- Exclude(从提交中排除)： 某些文件我们需要在本地进行配置，但是不希望提交到线上去，那么我们就可以将该文件进行从提交中排除操作，该文件就不会被同步到远程分支中了

远程操作指的是会访问远程分支，读取或写入内容的操作：

- Fetch(获取)：获取时会从原始远程资源库中获得尚未拥有的更改。它绝不会更改任何本地分支。获取时会从远程资源库中获得所有分支，您可以将这些分支合并到现有分支中，也可以随时检查它们。
- Pull(提取): 从远程 Git 资源库中提取某些更新时，将从中获取更改，并将其合并到本地资源库的当前 HEAD 中。
- Push(推入)：要将更改从本地 Git 资源库提供到公共 Git 资源库中。
<div class="note warning">
  <h5>关于推入操作</h5>
  <p>
    在任何时候需要执行推入操作之前，请首先执行获取或者提取操作，并处理可能产生的冲突，保证在推入时不会有冲突产生。
  </p>
</div>

下一节介绍如何利用jekyll在本地运行我们所编写的文档项目