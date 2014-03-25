---
layout: docs
title: GitHub Usage
prev_section: installation
next_section: jekyllusage
permalink: /docs/githubusage/
---

> Github提供了一个强大的版本控制平台，我们可以通过Github来查看项目历史及更改内容，甚至每个成员的贡献度和提交频率。
>
> Github Pages提供了服务器支持，我们可以免费在这里发布自己的文档项目。其内置了Jekyll转换器引擎，使得我们不需要自行申请服务器并配置服务器环境。
>
> 该文档记录了Github的简单使用规则和一些了解Github的途径和资源。

## 安装GitHub

可以通过[GitHub for Windows](http://windows.github.com/)来安装并通过界面的方式来使用GitHub，你也可以通过输入命令的方式来控制你的操作。请查看下列文档来熟悉GitHub:

* [Set Up Git](https://help.github.com/articles/set-up-git)
* [Create Repositories](https://help.github.com/create-a-repo)
* [Fork A Repo](https://help.github.com/articles/fork-a-repo)
* [Git Help](https://help.github.com/)

当你不是一个Geek，也对命令行神马的不感兴趣的时候，以下教程可能会使你对Github的操作变得异常简单，下面我来介绍以下如何用[Netbeans](https://netbeans.org/)控制Github。

## SmartGit使用指南

###安装SmartGit
* 下载[SmartGit](http://www.syntevo.com/)
* 安装一直下一步即可
* 期间或选择使用的平台选择Github，输入用户名密码即可
* 
###使用SmartGit
* Project->clone->Remote Git中填写Github中的地址，一直下一步即可
* 等待项目clone完毕，就可以对项目进行编辑了，编辑之后
<img src="{{ site.url }}/img/smartgit/smartgit.jpg"  width = "650" alt="">
* 当编辑之后，我们可以在Directories中看到，被修改的文件的所在文件夹右上角有个箭头，代表文件有过修改，点击该文件夹，可以看到Files中有被修改的文件列表，点击该文件，在changes中会有修改前和修改后的对比。
* 在每次提交前先点击Pull按钮，确保当前本地是最新版本，避免冲突
* 确保无误之后，点击commit，会弹出commit框，在这里我们可以选择要提交的文件，然后填写Commit Message。方便其他人了解到你都做了什么修改，然后点击commit&push，就提交上去了
* Commit Message的格式
 * Add 添加文件的名称或者方法
 * Update 更新文件名称或者方法
 * Delete 删除文件的名称或者方法


## GitHub操作

这里只介绍一些简单的GitHub版本控制操作，详细资料请查看[这里](https://netbeans.org/kb/docs/ide/git_zh_CN.html)

操作分为本地操作(提交、比较、还原、从提交中排除)和远程操作(提取、推入)

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