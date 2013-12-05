---
layout: docs
title: Jekyll Usage
prev_section: githubusage
next_section: markdownbase
permalink: /docs/jekyllusage/
---

>我们需要本地环境运行并测试所编写的文档内容和样式是否正确。<br>
>在[Installation]章节中已经讲解了如何搭建该环境。<br>
>在[GitHub]章节中已经讲解了如何利用Github将项目克隆到本地。
>
>该章节主要讲解利用Jekyll来运行并查看项目内容。<br>
>以及Jekyll提供的框架和内置功能方便文档撰写。

当我们通过GitHub将项目克隆到本地后(假如克隆到D:/PolyTechDocs/下)，我们就可以利用Jekyll访问我们的页面了。
Jekyll提供了一个内置服务器，可以使得我们直接通过浏览器来访问我们本地项目。

{% highlight bash %}
D:\PolyTechDocs> jekyll serve
# => 本地服务器进行部署，此时可以通过http://localhost:4000/来进行访问
D:\PolyTechDocs> jekyll serve --watch
# => 本地服务器进行部署并监听，一旦项目中发生改变，将会导致服务器重新部署
# => 该命令使得编写文档后查看效果非常方便，只需要刷新页面即可
{% endhighlight %}

<div class="note">
  <h5>更多关于Jekyll的框架、变量、配置、插件的内容</h5>
  <p>
    Jekyll有很多的功能和模块，也有很多的配置文件，也可以进行很多的扩展，如果对这些感兴趣，请访问Jekyll的<a href="http://jekyllrb.com/docs/home/">官方说明文档</a>。
  </p>
</div>

##Directory structure

Jekyll有其自身的文件结构和框架，利用默认文件结构可以减少很多的环境配置。基本Jekyll文件框架如下：

{% highlight bash %}
.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
|   └── members.yml
├── _site
└── index.html
{% endhighlight %}

以下是该文档目录信息的简要介绍：

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>文件 / 目录</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>_config.yml</code></p>
      </td>
      <td>
        <p>
          存放 <a href="http://jekyllrb.com/docs/configuration/">configuration</a> 信息。本项目中一般情况下不需要修改该文件
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_drafts</code></p>
      </td>
      <td>
        <p>
          存放没有发布的草稿。了解具体内容请访问<a href="http://jekyllrb.com/docs/drafts/">这里</a>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_includes</code></p>
      </td>
      <td>
        <p>
            存放用于文档中用于组装的文件碎片，很好的实现了复用性。可以用该标签<code>{% raw %}{% include file.ext %}{% endraw %}</code>将<code>_includes/file.ext</code>中的文件包含进去。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_layouts</code></p>
      </td>
      <td>
        <p>
            存放具体的布局文件，文档在开头的配置信息中指定相应所需要的布局
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_posts</code></p>
      </td>
      <td>
        <p>
            包含日记格式文档。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_data</code></p>
      </td>
      <td>
        <p>
            站点数据可以放在这里。Jekyll引擎会自动到这里文件夹中寻找yaml格式的文件。可以通过<code>site.data.members</code>来进行访问
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_site</code></p>
      </td>
      <td>
        <p>
            默认情况下，Jekyll会把转换生成的网页存放在这个文件夹下。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>特定文件类型</p>
      </td>
      <td>
        <p>
            Jekyll会对以下文件类型<code>.html</code>, <code>.markdown</code>,<code>.md</code>,<code>.textile</code>进行转换。这些文件需要以<a href="http://jekyllrb.com/docs/frontmatter/">YAML Front Matter</a>格式作为起始。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>其它文件/文件夹</p>
      </td>
      <td>
        <p>
            除了<code>css</code>和<code>images</code> 文件夹,<code>favicon.ico</code>文件， 其它文件及文件夹都会拷贝到_site下面，可以通过相对路径来进行访问。
        </p>
      </td>
    </tr>
  </tbody>
</table>
</div>

[Installation]: {{site.url}}/docs/installation/
[GitHub]: {site.url}}/docs/githubusage/