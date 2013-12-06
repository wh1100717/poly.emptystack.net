---
layout: python_item
permalink: /python/ojintroduction/
title: "Online Judgement Introduction"
date: "2013-11-25 02:12:52 +0200"
author: wh1100717
version: 1.0.0
categories: [demo]
---

##做OJ中可能用到的基本语句

{% highlight python %}
1、#注释符号
	#后面跟的是注释语句，我们的注释语句都用这种格式标明
2、#引用模块/库
import sys #类似于c++中的#include <stdio>，标明引入sys库，也称为sys模块
3、#输入
a = sys.stdin.readline() 
    #该方法表示通过命令行读取一行字符串，并赋值给a变量
    #注意该方法得到的是带有“\n”(即换行符)的字符串
a = raw_input() #也可以使用该方法来读取一行字符串
4、#输出
print a
    #输出变量所对应的字符串内容，其会调用__str__(self)
    #类似于java中的toString()
print "abc"	
    #输出abc字符串  
print 123	
    #输出123数字
print "%d %f %c" %(a,b,c) 
    #输出一个字符串，其中包含了整型a、浮点型b和字符串c
5、#for循环.循环10次   range是一个范围函数，具体教程中有介绍
for i in range(10):
    print i
6、#if判断
if a > 2:
    print "a >= 2"
elif a == 2:
    print "a = 2"
else:
    print "a < 2"
7、#while循环  break结束循环 continue结束本次执行，继续循环
while True:
    if i > 3： break
    print "i = %d" %i
    i = i - 1
8、#True和False  为布尔类型， 注意首字母大写
9、#可以简写为i += 1，但是不可以简写为i++
i = i + 1
10、#类型转换：
int(a)          #转换为int类型
float(a)        #转换为float类型
str(a)          #转换为字符串类型
"%d" %a         #int类型转换为字符串类型
"%f" %a         #float类型转换为字符串类型
"%.3f" %a       #float类型转换为带精度的字符串类型，
                #其特点是小数点后有3位，即23.200这样的格式
11、#引用数学处理库
import math 
math.ceil(3.14)     #会返回4.0
math.floor(3.14)    #会返回3.0
math.sqrt(a)        #返回根号a
12、
max(a, b)       #比较a和b的大小，并返回大的值，比如max(3,4)返回4
min(a, b)       #比较a和b的大小，并返回小的值，比如max(3,4)返回3
round(a)        #四舍五入,比如round(3.2)返回3.0	| round(3.5)返回4.0
13、#切片函数,将字符串按照" "（即空格）切片 然后转换为数组
"1 2 3 4 5".split() #返回的是['1','2','3','4','5']
    #还可以给其参数，按照不同的格式来分割成数组，具体可以自行google之   
14、三元表达式
Python没有三元表达式，作为替代，Python可以利用如下形式实现该功能：
exp1 if exp2 else exp3 (所对应的java版本为exp2?exp1:exp3)
a　=　"not　null"　if　s　==　None　else　s
{% endhighlight %}