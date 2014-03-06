---
layout: javascript_item
permalink: /javascript/note/2/
title: "JavaScript Note 2"
date: "2014-01-26 02:12:52 +0200"
author: wh1100717
version: 1.0.0
categories: [release]
---



Javascript学习笔记(二)
=========

---
##Function
在JavaScript中，函数是Function类的具体实例。而且都与其它引用类型一样具有属性和方法。函数名实际上是指向函数对象的指针，函数可以作为参数参与到传参和返回值中。
###函数定义
```javascript
//函数声明式定义
function foo(num1,num2){
    return num1 + num2;
}
//函数表达式定义
var foo = function(num1,num2){
    return num1 + num2;
};
//使用Function构造函数定义
var foo = new Function("num1","num2","return num1 + num2")；
//实际上创建一个Function实例并不一定要赋值给具体的指针，可以直接执行
(function(x,y){return x+y})(1,2);
//之所以用圆括号把function(){}括起来是因为js解释器会将function解释为函数声明，而函数声明不能直接跟着(x,y)，我们需要将其转换为函数表达式。
//(1,2)表示要传递跟函数的参数。
//上面的例子也可以写成：
function foo(x,y){
    return x+y;
}(1,2);
//函数声明的方式无法定义匿名函数，因此如果想使用匿名函数，则必须用函数表达式的定义方式。
```

###函数的对象特性
因为函数是Function的实例，而函数名仅仅是该实例的一个引用地址。因此可以作为参数和返回值参与到函数的传参过程中。

```javascript
function call_some_function(some_function, some_argument) {
    return some_function(some_argument);
}
function add_10(num) {
    return num + 10;
}
console.log(call_some_function(add_10,20)); //30
```

###函数的内部属性
`arguments` | `this`

*   `arguments`对象中保存着传递给函数的参数
*   `arguments.length`返回传入参数的个数
*   **Note**: `length`属性表示函数定义时候默认接收的参数数量。`arguments.length`表示函数实际执行时接收的参数数量。

```javascript
function test_arguments() {
    if (arguments.length == 2) {
        console.log(arguments.length); 
        console.log(arguments); 
    } else {
        console.log(arguments.length); 
        console.log(arguments); 
        arguments.callee(4, 5);
    };
}(1, 2, 3)
/**
 3
{ '0': 1, '1': 2, '2': 3 }
2
{ '0': 4, '1': 5 }
 **/
```
*   `arguments.callee()`主要用在递归函数中调用函数自身的情境中。js和别的语言不同在于函数名只是一个指针，可以随时变化，函数中利用函数名来调用自身属于高耦合，可能会出现问题，而`arguments.callee()`调用自身就会规避掉这个问题

```javascript
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    };
}
function callee_f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    };
}
factorial(10); //运行正常
f = factorial;
factorial = null;
f(10); //error

callee_f(10); //运行正常
f = callee_f;
callee_f = null;
f(10); //运行正常
```

*   `this`主要用来帮助函数引用函数所处作用域中的对象。

```javascript
var color = 'red';
function syaColor() {
    console.log(this.color);
}
syaColor(); //red
var o = new Object();
o.color = 'blue';
o.sayColor = sayColor;
o.sayColor(); //blue
```

###call()和apply()
call()和apply()是每个函数都包含的自有方法。之前已经提到了函数是定义的对象，那么调用函数时候，函数中的`this`是对当前与下变量的调用。而如果想改变函数执行所在域空间，则可以使用call()和apply()来实现。

```javascript
color = 'red';
var o = {color: 'blue'};
function sayColor() {
    console.log(this.color);
}
sayColor(); //red
sayColor.call(this); //red
sayColor.call(o); //blue
```
app()和call()的作用是相同的，区别主要在于传入参数的不同。
>`call(this,para1,prar2,prar3)` 第一个参数是函数要执行的作用域，后面的参数是函数的输入参数，有多少个依次写多少个。

>`apply(this,[para1,para2,prara3])`第一个参数也是函数要执行的作用域，后面是一个Array的数组对象。

使用`call()`/`apply()`来扩充作用域最大的好处是对象和方法的解耦。

##内置对象
`Global`对象可以理解成最外层的对象，所有的对象，以及不属于其它对象的属性和方法都被包含在Global对象中。
*   `isNaN(x)` 用来检查参数x是否为数字。如果为数字返回false，否则返回true
*   `isFinite(x)` 用来检查参数x是否为无穷大/小，如果是无穷大/小，则返回true
*   `parseInt(x)` 用来解析字符串并返回整数
*   `parseFloat(x)` 用来解析字符串并返回浮点数
*   `encodeURI()`和`encodeURIComponent()`会对字符串进行特殊的UTF-8编码，规避一些特殊字符来让浏览器能够读懂。他俩的区别主要在于`encodeURI()`不会对本身属于URI的特殊字符进行编码，而`encodeURIComponent()`会对其发现的所有非标准字符进行编码。

```javascript
var uri = "http://www.wrox.com/illegal value.htm#start";
//http://www.wrox.com/illegal%20value.htm#start
console.log(encodeURI(uri))
//http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start
console.log(encodeURIComponent(uri))
```
*   对应的解码函数为`decodeURI()`和`decodeURIComponent()`
*   `eval(script)` 用来将script的内容在解释器中执行并返回对应的结果。非常强大！

**Note**:在浏览器中，windows对象封装了Global对象，并承担了很多额外的任务和功能。

`Math`对象为另一个内置对象。为JavaScript提供了数学计算功能。

##函数闭包
先看一段代码
```javascript
function f(){
    var n = 100;
}
f()
```
变量n定义在f()中，属于作用于f的内部变量，当f()执行结束后变量的生存周期就结束了，所开辟的内存空间也将会被垃圾回收。
再看另一段代码
```javascript
function f1(){
    var n = 100;
    return function f2(){console.log(n);}
}
var result = f1()
console.log(result()) //100
```
我们在函数f1()外面定义了变量resul来接受f1()执行以后的返回值，f1()的返回值是一个匿名函数，该函数调用了f1()内部定义的变量n。

我们发现虽然f1()执行完成了，但是执行`result()`会输出`100`，说明变量n并没有失效，他可以在f1()作用域外被result函数访问。

我们把这种函数中引用函数作用域以外变量的特性叫做--**函数的闭包**

函数闭包可以扩大引用变量的生存周期和使用范围，但也有可能造成内存泄露。


