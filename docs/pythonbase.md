---
layout: docs
title: Python
prev_section: jekyllusage
next_section: pythonbase
permalink: /docs/pythonbase/
---

Python是一种面线对象、直译式计算机程序设计语言。其语法简洁而清晰，具有丰富和强大的类库。它能够很轻松的把用其他语言制作的各种模块（尤其是C/C++）轻松地联结在一起。Python除了底层系统编程以外，几乎覆盖了所有技术领域，因此对于一个新人来说，学习Python几乎可以将其应用于以后任何的工作中。
<div class="note info">
  <h5>关于Python基础教程</h5>
  <p>
        这不是最终的Python基础教程，只是我们在学习过程中遇到的问题和经验的汇总，随着更多的人来完善，他才会成为一个真正的Python基础教程。
  </p>
</div>

##版本选择

Python分为2.x和3.x版本，Python3进行了大幅度的更改，建议学习Python2.x，因为目前的大部分插件和库仍然以2.x为主，而且在2.x的基础上学习3.x,并非难事。

Python的下载地址在[这里](http://www.python.org/)。安装后在系统环境变量PATH中[配置Python相关的环境变量](http://blog.csdn.net/liguo9860/article/details/6829610)，可以通过以下命令查看是否安装并配置成功(注意：是大写的-V)：

{% highlight bash %}
$ python -V
{% endhighlight %}

##基础语法

{% highlight python %}
———————————————————————————————————————————
inputs=raw_input()           #输入
inputs=sys.stdin.readline()  #输入
print inputs                 #输出
———————————————————————————————————
#for循环 循环10次
for i in range(10):  
    print i
—————————————————————————————————————————————
#if判断
a=3
if a>=2: 
    print 'a>=2'
else:
    print 'a<2'
————————————————————————————————————————
#while循环
i=10		
while i>3:
    i-=1  #相当于i=i-1
    print i
————————————————————————————————————————————
intNumber = int(raw_input()) #输入的内容转换成int
stringWord = str(intNumber) #强制转换成字符串型

{% endhighlight %}

##To Be Continued