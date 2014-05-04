---
layout: python_item
permalink: /python/intro/
title: "Python Introduction"
date: "2013-11-25 02:12:52 +0200"
author: wh1100717
version: 1.0.0
categories: [demo]
---

>Python是一种简单易学，功能强大的编程语言，它有高效率的高层数据结构，简单而有效地实现面向对象编程。Python简洁的语法和对动态输入的支持，再加上解释性语言的本质，使得它在大多数平台上的许多领域都是一个理想的脚本语言，特别适用于快速的应用程序开发。

<div class="note info">
  <h5>关于Python基础教程</h5>
  <p>这不是最终的Python基础教程，只是我们在学习过程中遇到的问题和经验的汇总，随着更多的人来完善，他才会成为一个真正的Python基础教程。</p>
</div>

##Python特点
-------------------------------------------
*   **简单**：阅读一个良好的Python程序就感觉像是在读英语一样，尽管这个英语的要求非常严格！Python的这种伪代码本质是它最大的优点之一。它使你能够专注于解决问题而不是去搞明白语言本身。
*   **易学**：就如同你即将看到的一样，Python极其容易上手。前面已经提到了，Python有极其简单的语法。
*   **开源**：Python是FLOSS（自由/开放源码软件）之一。这是为什么Python如此优秀的原因之一——它是由一群希望看到一个更加优秀的Python的人创造并经常改进着的。
*   **高层语言**：当你用Python语言编写程序的时候，你无需考虑诸如如何管理你的程序使用的内存一类的底层细节。
*   **可移植性**：由于它的开源本质，Python已经被移植在许多平台上（经过改动使它能够工作在不同平台上）。这些平台包括Linux、Windows、FreeBSD、Macintosh、Solaris、OS/2、Amiga、AROS、AS/400、BeOS、OS/390、z/OS、Palm OS、QNX、VMS、Psion、Acom RISC OS、VxWorks、PlayStation、Sharp Zaurus、Windows CE甚至还有PocketPC！
*   **解释性**：你可以直接从源代码 运行 程序。在计算机内部，Python解释器把源代码转换成称为字节码的中间形式，然后再把它翻译成计算机使用的机器语言并运行。事实上，由于你不再需要担心如何编译程序，如何确保连接转载正确的库等等，所有这一切使得使用Python更加简单。由于你只需要把你的Python程序拷贝到另外一台计算机上，它就可以工作了，这也使得你的Python程序更加易于移植。
*   **面向对象**：Python即支持面向过程的编程也支持面向对象的编程。在面向过程的语言中，程序是由过程或仅仅是可重用代码的函数构建起来的。在面向对象的语言中，程序是由数据和功能组合而成的对象构建起来的。与其他主要的语言如C++和Java相比，Python以一种非常强大又简单的方式实现面向对象编程。
*   **可扩展性**：如果你需要你的一段关键代码运行得更快或者希望某些算法不公开，你可以把你的部分程序用C或C++编写，然后在你的Python程序中使用它们
*   **可嵌入性**：你可以把Python嵌入你的C/C++程序，从而向你的程序用户提供脚本功能。
*   **丰富的库**：Python标准库确实很庞大。它可以帮助你处理各种工作，包括正则表达式、文档生成、单元测试、线程、数据库、网页浏览器、CGI、FTP、电子邮件、XML、XML-RPC、HTML、WAV文件、密码系统、GUI（图形用户界面）、Tk和其他与系统有关的操作。记住，只要安装了Python，所有这些功能都是可用的。这被称作Python的“功能齐全”理念。除了标准库以外，还有许多其他高质量的库，如[wxPython]、[Twisted]和[Python图像库]等等。

##安装Python
-------------------------------------------
* Python分为2.x和3.x版本，Python3进行了大幅度的更改，建议学习Python2.x，因为目前的大部分插件和库仍然以2.x为主，而且在2.x的基础上学习3.x,并非难事。
* 下载并安装[Python](http://www.python.org/)
* 安装后在系统环境变量PATH中[配置Python相关的环境变量](http://blog.csdn.net/liguo9860/article/details/6829610)
* `$ python -V`查看是否安装并配置成功（注意：是大写的-V）

##Netbeans 7.x安装Python插件
-------------------------------------------
目前新版的NetBeans 7.x 中，默认的插件中心已经没有python插件了，虽然不能直接在插件中心下载，我们可以手动来添加地址让NetBeans进入开发模式，安装python插件。如图所示：
工具-->插件-->设置，点击添加，URL输入 http://deadlock.netbeans.org/hudson/job/nbms-and-javadoc/lastStableBuild/artifact/nbbuild/nbms/updates.xml.gz ，名称随意，点击确定，等待插件库更新。

<img src="{{ site.url }}/img/python/netbeans4python/netbeans4python1.png"  width = "650" alt="">

更新好以后，选择可用插件，右侧搜索中输入`python`，选择安装Python，然后等待安装即可。
<img src="{{ site.url }}/img/python/netbeans4python/netbeans4python2.png"  width = "650" alt="">

安装成功以后重启netbeans,就可以在新建项目中建立python的项目了。

<img src="{{ site.url }}/img/python/netbeans4python/netbeans4python3.png"  width = "650" alt="">
##Eclipse安装Python插件
-------------------------------------------
*	[下载PyDev](http://pan.baidu.com/s/13oRlq)
*	解压放置在eclipse文件夹下
*	启动eclipse
*	windows->Preferences->PyDev->Interpreters->Python interpreter下点击new添加python.exe完成
<img src="{{ site.url }}/img/python/eclipse4python/eclipsePydev.jpg" width="650" alt="">
##Eclipse配置Github
*	[下载Egit](http://pan.baidu.com/s/13oRlq)
*	解压放置在eclipse文件夹下
*	启动eclipse
*	File->import
![](http://img.my.csdn.net/uploads/201302/03/1359856918_4871.png)
*	点击next选择clone URI
![](http://img.my.csdn.net/uploads/201302/03/1359856965_4239.png)
*	将Github的项目地址复制到URI中，并在Authentication中填写个人的Github账号->next
![](http://img.my.csdn.net/uploads/201302/03/1359857008_4839.png)
*	选择分支<br>
![](http://img.my.csdn.net/uploads/201302/03/1359857084_9693.png)
*	配置本地项目存放路径
![](http://img.my.csdn.net/uploads/201302/03/1359857140_3138.png)
*	选择Import as general project
<img src="{{ site.url }}/img/python/eclipse4python/github.jpg"  alt="">
*	next->finish<br>
![](http://img.my.csdn.net/uploads/201302/03/1359857335_4462.png)
###基础语法
-------------------------------------------
###常量
一个字面意义上的常量的例子是如同5、1.23、9.25e-3这样的数，或者如同'This is a string'、"It's a string!"这样的字符串。它们被称作字面意义上的，因为它们具备 字面 的意义---你按照它们的字面意义使用它们的值。数2总是代表它自己，而不会是别的什么东西——它是一个常量，因为不能改变它的值。因此，所有这些都被称为字面意义上的常量。
——————————————————————————————————————
###数
在Python中有4种类型的数——整数、长整数、浮点数和复数。

*	2是一个整数的例子。
*	长整数不过是大一些的整数。
*	3.23和52.3E-4是浮点数的例子。E标记表示10的幂。在这里，52.3E-4表示52.3 * 10-4。
*	(-5+4j)和(2.3-4.6j)是复数的例子。

——————————————————————————————————————
###字符串
字符串是 字符的序列 。字符串基本上就是一组单词。<br>
我几乎可以保证你在每个Python程序中都要用到字符串，所以请特别留心下面这部分的内容。下面告诉你如何在Python中使用字符串。

使用单引号（'）<br>
你可以用单引号指示字符串，就如同'Quote me on this'这样。所有的空白，即空格和制表符都照原样保留。

使用双引号（"）<br>
在双引号中的字符串与单引号中的字符串的使用完全相同，例如"What's your name?"。

使用三引号（'''或"""）<br>
利用三引号，你可以指示一个多行的字符串。你可以在三引号中自由的使用单引号和双引号。例如：

{% highlight python %}
'''This is a multi-line string. This is the first line.
This is the second line.
"What's your name?," I asked.
He said "Bond, James Bond."
'''
{% endhighlight %}
转义符<br>
假设你想要在一个字符串中包含一个单引号（'），那么你该怎么指示这个字符串？例如，这个字符串是What's your name?。你肯定不会用'What's your name?'来指示它，因为Python会弄不明白这个字符串从何处开始，何处结束。所以，你需要指明单引号而不是字符串的结尾。可以通过 转义符 来完成这个任务。你用\'来指示单引号——注意这个反斜杠。现在你可以把字符串表示为'What\'s your name?'。

另一个表示这个特别的字符串的方法是"What's your name?"，即用双引号。类似地，要在双引号字符串中使用双引号本身的时候，也可以借助于转义符。另外，你可以用转义符\\来指示反斜杠本身。

值得注意的一件事是，在一个字符串中，行末的单独一个反斜杠表示字符串在下一行继续，而不是开始一个新的行。例如：

{% highlight python %}
"This is the first sentence.\
This is the second sentence."
等价于"This is the first sentence. This is the second sentence."
{% endhighlight %}

自然字符串<br>
如果你想要指示某些不需要如转义符那样的特别处理的字符串，那么你需要指定一个自然字符串。自然字符串通过给字符串加上前缀r或R来指定。例如r"Newlines are indicated by \n"。

Unicode字符串<br>
Unicode是书写国际文本的标准方法。如果你想要用你的母语如北印度语或阿拉伯语写文本，那么你需要有一个支持Unicode的编辑器。类似地，Python允许你处理Unicode文本——你只需要在字符串前加上前缀u或U。例如，u"This is a Unicode string."。

记住，在你处理文本文件的时候使用Unicode字符串，特别是当你知道这个文件含有用非英语的语言写的文本。

字符串是不可变的<br>
这意味着一旦你创造了一个字符串，你就不能再改变它了。虽然这看起来像是一件坏事，但实际上它不是。我们将会在后面的程序中看到为什么我们说它不是一个缺点。

按字面意义级连字符串<br>
如果你把两个字符串按字面意义相邻放着，他们会被Python自动级连。例如，'What\'s' 'your name?'会被自动转为"What's your name?"。
——————————————————————————————————————
###变量
仅仅使用字面意义上的常量很快就会引发烦恼——我们需要一种既可以储存信息 又可以对它们进行操作的方法。这是为什么要引入 变量 。变量就是我们想要的东西——它们的值可以变化，即你可以使用变量存储任何东西。变量只是你的计算机中存储信息的一部分内存。与字面意义上的常量不同，你需要一些能够访问这些变量的方法，因此你给变量名字。
——————————————————————————————————————
###标识符的命名
变量是标识符的例子。 标识符 是用来标识 某样东西 的名字。在命名标识符的时候，你要遵循这些规则：
>	标识符的第一个字符必须是字母表中的字母（大写或小写）或者一个下划线（‘ _ ’）。
>   标识符名称的其他部分可以由字母（大写或小写）、下划线（‘ _ ’）或数字（0-9）组成。
>	标识符名称是对大小写敏感的。例如，myname和myName不是一个标识符。注意前者中的小写n和后者中的大写N。
>	有效 标识符名称的例子有i、__my_name、name_23和a1b2_c3。
>	无效 标识符名称的例子有2things、this is spaced out和my-name。

——————————————————————————————————————
###缩进
空白在Python中是重要的。事实上行首的空白是重要的。它称为缩进。在逻辑行首的空白（空格和制表符）用来决定逻辑行的缩进层次，从而用来决定语句的分组。<br>
这意味着同一层次的语句必须有相同的缩进。每一组这样的语句称为一个块。<br>
不要混合使用制表符和空格来缩进，因为这在跨越不同的平台的时候，无法正常工作。我 强烈建议 你在每个缩进层次使用 单个制表符 或 两个或四个空格 。<br>
选择这三种缩进风格之一。更加重要的是，选择一种风格，然后一贯地使用它，即 只 使用这一种风格。

——————————————————————————————————————
###控制流
\--if语句：<br>
if语句用来检验一个条件， 如果 条件为真，我们运行一块语句（称为 if-块 ）， 否则 我们处理另外一块语句（称为 else-块 ）。 else 从句是可选的。

{% highlight python %}
number = 23
guess = int(raw_input('Enter an integer : '))

if guess == number:
    print 'Congratulations, you guessed it.' # New block starts here
    print "(but you do not win any prizes!)" # New block ends here
elif guess < number:
    print 'No, it is a little higher than that' # Another block
    # You can do whatever you want in a block ...
else:
    print 'No, it is a little lower than that' 
    # you must have guess > number to reach here

print 'Done'
# This last statement is always executed, after the if statement is executed
{% endhighlight %}

\--while语句：<br>
只要在一个条件为真的情况下，while语句允许你重复执行一块语句。while语句是所谓 循环 语句的一个例子。while语句有一个可选的else从句。

{% highlight python %}
number = 23
running = True

while running:
    guess = int(raw_input('Enter an integer : '))

    if guess == number:
        print 'Congratulations, you guessed it.' 
        running = False # this causes the while loop to stop
    elif guess < number:
        print 'No, it is a little higher than that' 
    else:
        print 'No, it is a little lower than that' 
else:
    print 'The while loop is over.' 
    # Do anything else you want to do here

print 'Done'
{% endhighlight %}

--for循环<br>
for..in是另外一个循环语句，它在一序列的对象上 递归 即逐一使用队列中的每个项目。

{% highlight python %}
for i in range(1, 5):
    print i
else:
    print 'The for loop is over'
{% endhighlight %}

{% highlight python %}
for index, data in enumerate(list):#index表示是第几次循环
{% endhighlight %}

--break语句<br>
break语句是用来 终止 循环语句的，即哪怕循环条件没有称为False或序列还没有被完全递归，也停止执行循环语句。<br>
一个重要的注释是，如果你从for或while循环中 终止 ，任何对应的循环else块将不执行。

{% highlight python %}
while True:
    s = raw_input('Enter something : ')
    if s == 'quit':
        break
    print 'Length of the string is', len(s)
print 'Done'
{% endhighlight %}

--continue语句<br>
continue语句被用来告诉Python跳过当前循环块中的剩余语句，然后 继续 进行下一轮循环。

{% highlight python %}
while True:
    s = raw_input('Enter something : ')
    if s == 'quit':
        break
    if len(s) < 3:
        continue
    print 'Input is of sufficient length'
    # Do other kinds of processing here...
{% endhighlight %}
——————————————————————————————————————
###函数<br>
函数是重用的程序段。它们允许你给一块语句一个名称，然后你可以在你的程序的任何地方使用这个名称任意多次地运行这个语句块。这被称为 调用 函数。我们已经使用了许多内建的函数，比如len和range。<br>
函数通过def关键字定义。def关键字后跟一个函数的 标识符 名称，然后跟一对圆括号。圆括号之中可以包括一些变量名，该行以冒号结尾。接下来是一块语句，它们是函数体。下面这个例子将说明这事实上是十分简单的：

{% highlight python %}
def sayHello():
    print 'Hello World!' # block belonging to the function
sayHello() # call the function
{% endhighlight %}

--函数形参<br>
函数取得的参数是你提供给函数的值，这样函数就可以利用这些值 做 一些事情。这些参数就像变量一样，只不过它们的值是在我们调用函数的时候定义的，而非在函数本身内赋值。<br>
参数在函数定义的圆括号对内指定，用逗号分割。当我们调用函数的时候，我们以同样的方式提供值。注意我们使用过的术语——函数中的参数名称为 形参 而你提供给函数调用的值称为 实参 。

{% highlight python %}
def printMax(a, b):
    if a > b:
        print a, 'is maximum'
    else:
        print b, 'is maximum'
printMax(3, 4) # directly give literal values
x = 5
y = 7
printMax(x, y) # give variables as arguments
{% endhighlight %}

--局部变量<br>
当你在函数定义内声明变量的时候，它们与函数外具有相同名称的其他变量没有任何关系，即变量名称对于函数来说是 局部 的。这称为变量的 作用域 。所有变量的作用域是它们被定义的块，从它们的名称被定义的那点开始。

{% highlight python %}
def func(x):
    print 'x is', x
    x = 2
    print 'Changed local x to', x

x = 50
func(x)
print 'x is still', x
{% endhighlight %}

--默认参数值<br>
对于一些函数，你可能希望它的一些参数是 可选 的，如果用户不想要为这些参数提供值的话，这些参数就使用默认值。这个功能借助于默认参数值完成。你可以在函数定义的形参名后加上赋值运算符（=）和默认值，从而给形参指定默认参数值。<br>
注意，默认参数值应该是一个参数。更加准确的说，默认参数值应该是不可变的——这会在后面的章节中做详细解释。从现在开始，请记住这一点。

{% highlight python %}
def say(message, times = 1):
    print message * times
say('Hello')
say('World', 5)
{% endhighlight %}

--关键参数<br>
如果你的某个函数有许多参数，而你只想指定其中的一部分，那么你可以通过命名来为这些参数赋值——这被称作 关键参数 ——我们使用名字（关键字）而不是位置（我们前面所一直使用的方法）来给函数指定实参。<br>
这样做有两个 优势 ——一，由于我们不必担心参数的顺序，使用函数变得更加简单了。二、假设其他参数都有默认值，我们可以只给我们想要的那些参数赋值。

{% highlight python %}
def func(a, b=5, c=10):
    print 'a is', a, 'and b is', b, 'and c is', c

func(3, 7)
func(25, c=24)
func(c=50, a=100)
{% endhighlight %}

--return语句<br>
return语句用来从一个函数 返回 即跳出函数。我们也可选从函数 返回一个值 。

{% highlight python %}
def maximum(x, y):
    if x > y:
        return x
    else:
        return y
print maximum(2, 3)
{% endhighlight %}

--DocStrings<br>
Python有一个很奇妙的特性，称为 文档字符串 ，它通常被简称为 docstrings 。DocStrings是一个重要的工具，由于它帮助你的程序文档更加简单易懂，你应该尽量使用它。你甚至可以在程序运行的时候，从函数恢复文档字符串！

{% highlight python %}
def printMax(x, y):
    '''Prints the maximum of two numbers.
    The two values must be integers.'''
    x = int(x) # convert to integers, if possible
    y = int(y)
    if x > y:
        print x, 'is maximum'
    else:
        print y, 'is maximum'
printMax(3, 5)
print printMax.__doc__
{% endhighlight %}

——————————————————————————————————————
###数据结构<br>
--列表<br>
list是处理一组有序项目的数据结构，即你可以在一个列表中存储一个 序列 的项目。假想你有一个购物列表，上面记载着你要买的东西，你就容易理解列表了。只不过在你的购物表上，可能每样东西都独自占有一行，而在Python中，你在每个项目之间用逗号分割。<br>
列表中的项目应该包括在方括号中，这样Python就知道你是在指明一个列表。一旦你创建了一个列表，你可以添加、删除或是搜索列表中的项目。由于你可以增加或删除项目，我们说列表是 可变的 数据类型，即这种类型是可以被改变的。

{% highlight python %}
# This is my shopping list
shoplist = ['apple', 'mango', 'carrot', 'banana']
print 'I have', len(shoplist),'items to purchase.'

print 'These items are:', # Notice the comma at end of the line
for item in shoplist:
    print item,

print '\nI also have to buy rice.'
shoplist.append('rice')
print 'My shopping list is now', shoplist

print 'I will sort my list now'
shoplist.sort()
print 'Sorted shopping list is', shoplist

print 'The first item I will buy is', shoplist[0]
olditem = shoplist[0]
del shoplist[0]
print 'I bought the', olditem
print 'My shopping list is now', shoplist
{% endhighlight %}

--元组<br>
元组和列表十分类似，只不过元组和字符串一样是 不可变的 即你不能修改元组。元组通过圆括号中用逗号分割的项目定义。元组通常用在使语句或用户定义的函数能够安全地采用一组值的时候，即被使用的元组的值不会改变。

{% highlight python %}
zoo = ('wolf', 'elephant', 'penguin')
print 'Number of animals in the zoo is', len(zoo)

new_zoo = ('monkey', 'dolphin', zoo)
print 'Number of animals in the new zoo is', len(new_zoo)
print 'All animals in new zoo are', new_zoo
print 'Animals brought from old zoo are', new_zoo[2]
print 'Last animal brought from old zoo is', new_zoo[2][2]
{% endhighlight %}

--字典<br>
字典类似于你通过联系人名字查找地址和联系人详细情况的地址簿，即，我们把键（名字）和值（详细情况）联系在一起。注意，键必须是唯一的，就像如果有两个人恰巧同名的话，你无法找到正确的信息。<br>
注意，你只能使用不可变的对象（比如字符串）来作为字典的键，但是你可以不可变或可变的对象作为字典的值。基本说来就是，你应该只使用简单的对象作为键。<br>
键值对在字典中以这样的方式标记：d = {key1 : value1, key2 : value2 }。注意它们的键/值对用冒号分割，而各个对用逗号分割，所有这些都包括在花括号中。<br>
记住字典中的键/值对是没有顺序的。如果你想要一个特定的顺序，那么你应该在使用前自己对它们排序。<br>
字典是dict类的实例/对象。

{% highlight python %}
# 'ab' is short for 'a'ddress'b'ook

ab = {       'Swaroop'   : 'swaroopch@byteofpython.info',
             'Larry'     : 'larry@wall.org',
             'Matsumoto' : 'matz@ruby-lang.org',
             'Spammer'   : 'spammer@hotmail.com'
     }

print "Swaroop's address is %s" % ab['Swaroop']

# Adding a key/value pair
ab['Guido'] = 'guido@python.org'

# Deleting a key/value pair
del ab['Spammer']

print '\nThere are %d contacts in the address-book\n' % len(ab)
for name, address in ab.items():
    print 'Contact %s at %s' % (name, address)

if 'Guido' in ab: # OR ab.has_key('Guido')
    print "\nGuido's address is %s" % ab['Guido']
{% endhighlight %}

--序列<br>
列表、元组和字符串都是序列，但是序列是什么，它们为什么如此特别呢？序列的两个主要特点是索引操作符和切片操作符。索引操作符让我们可以从序列中抓取一个特定项目。切片操作符让我们能够获取序列的一个切片，即一部分序列。

{% highlight python %}
shoplist = ['apple', 'mango', 'carrot', 'banana']

# Indexing or 'Subscription' operation
print 'Item 0 is', shoplist[0]
print 'Item 1 is', shoplist[1]
print 'Item 2 is', shoplist[2]
print 'Item 3 is', shoplist[3]
print 'Item -1 is', shoplist[-1]
print 'Item -2 is', shoplist[-2]

# Slicing on a list
print 'Item 1 to 3 is', shoplist[1:3]
print 'Item 2 to end is', shoplist[2:]
print 'Item 1 to -1 is', shoplist[1:-1]
print 'Item start to end is', shoplist[:]

# Slicing on a string
name = 'swaroop'
print 'characters 1 to 3 is', name[1:3]
print 'characters 2 to end is', name[2:]
print 'characters 1 to -1 is', name[1:-1]
print 'characters start to end is', name[:]
{% endhighlight %}
——————————————————————————————————————



[wxPython]:http://www.wxpython.org/
[Twisted]:http://www.twistedmatrix.com/products/twisted
[Python图像库]:http://www.pythonware.com/products/pil/index.htm


