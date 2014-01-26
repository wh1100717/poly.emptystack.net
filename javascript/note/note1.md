---
layout: javascript_item
permalink: /javascript/note/1/
title: "JavaScript Note 1"
date: "2014-01-26 02:12:52 +0200"
author: wh1100717
version: 1.0.0
categories: [release]
---


Javascript学习笔记(一)
=========

---
##创建Object实例
1.  使用new操作符后跟Object构造函数

    ```javascript
    var persion = new Object()
    persion.name = "Eric"
    persion.age = 27
    ```
2.  **对象字面量**表示法

    ```javascript
    var persion = {
        name : "Eric",
        age: 27
    }
    ```
3.  利用**对象字面量**表示法先创建一个Object对象，再赋值

    ```javascript
    var persion = {}
    persion.name = "Eric"
    persion.age = 27
    ```

**Note**: 使用对象字面量表示法定义对象时，不会调用Object构造函数(Firefox除外)

---

##创建Array类型数组
1.  基本方式，使用Array构造函数

    ```javascript
    var colors_empty = new Array()              #创建空数组
    ```
    当给Array()传递的参数为一个值的时候，如果传递的参数为数字，则根据传入的数字生成相应长度的数组；如果传入的是其它类型的参数，则生成包含该参数的长度为1的数组。

    ```javascript
    var colors_with_20_length = new Array(20)   #创建长度为20的数组，每一项初始值为undefined
    var colors_with_1_arg = new Array('Eric')   #创建长度为1的数组，colors_with_1_arg[0]为'Eric'
    ```
    使用Array构造函数时，new操作符可以省略：

    ```javascript
    var colors = Array(3)
    var names = Array('Eric')
    ```
2.  字面量表示法

    ```javascript
    var colors = ['red','blue','green']         #创建包含3个字符串的数组
    var names = []                              #创建一个空数组
    var do_not_create_array_like_this = [1,2,]  #在不同的解释器下数组长度可能不同，容易产生异常错误，不要如此定义！
    ```

**Note**: 使用对象字面量表示法定义对象时，不会调用Array构造函数(Firefox除外)

---

##数组的一些操作
###转换方法
`toLocalString()` | `toString()` | `valueOf()` | `join()`

*  `toString()`和`valueOf()`的区别：`toString()`偏重于显示，默认情况下它会将数据类型转换成String类型；`valueOf`会返回数据类型原本所拥有的数据类型。例如如下代码可以做一些区分。

    ```javascript
    var test_type_of_number = 123
    console.log(typeof test_type_of_number)                 #String
    console.log(typeof test_type_of_number.valueOf())       #number
    console.log(typeof test_type_of_number.toString())      #String
    ```

*  在JavaScript高级程序设计(V2)中描述"调用数组的`toString()`和`valuOf()`方法会返回相同的值，我认为是错误的。实际执行过程中发现:

    ```javascript
    var test_list = [1,2,3,'4']
    console.log(test_list.valueOf())                        #[1,2,3,'4']
    console.log(test_list.toString())                       #1,2,3,4
    console.log(test_list.join())                           #1,2,3,4
    console.log(test_list.join(','))                        #1,2,3,4
    ```

*  从这点上来看，Array中的`toString()`方法会调用数组中每一项数据的`toString()`方法来获取所对应的字符串再用`,`链接起来。而`join()`和`join(',')`的执行过程与`toString()`完全一样。

*  `toLocalString()`和`toString()`的不同之处在于，他会调用数组中每一个子项的`toLocalString()`方法，而不是`toString()`，所以在使用的时候需要注意区分。利用`toLocalString()`可以实现不同格式的格式化。

**Note**: 利用`alert(xxx)`来查看的时候他会自动调用对应的toString()方法来进行显示。因此`alert(list.valueOf())`实际执行的是`alert('list.valueOf().toString()')`

```javascript
var list = [1,2,3,4]
alert(list)                                             #1，2，3，4
alert(list.valueOf())                                   #1，2，3，4
alert(list.toString())                                  #1，2，3，4
```

###栈方法
`push()` | `pop()`

*   无难点，LIFO(Last-In-Frist-Out)栈结构的具体实现和操作方式

###队列方法
`push()` | `shift()` | `unshift()` | `pop()`

*   FIFO(First-In-Frist-Out)队列结构的具体实现和操作
*   `push()`和`shift()`配合使用可以实现队列结构的具体操作
*   'unshift()'和'pop()'配合使用可以实现逆序队列结构的具体操作

    ```javascript
    var list = [1,2,3,4]
    list.push(5)
    console.log(list)                                       #[1,2,3,4,5]
    console.log(list.shift())                               #1
    console.log(list)                                       #[2,3,4,5]
    list.unshift(6)
    console.log(list)                                       #[6,2,3,4,5]
    console.log(list.pop())                                 #5
    console.log(list)                                       #[6,2,3,4]
    ```

###排序方法
`reverse()` | `sort()`

*   `reverse()`方法就是将数组逆序排序
*   `sort()`方法相对复杂很多。首先`sort()`会调用数组中每一项元素的`toString`方法将其转换成String类型，然后对字符串的首字母进行排序比较。因此5和'10'排序，'10'会排在5前面。
*   `sort(function(value1,value2){})`可以接收一个比较函数，来改变`sort()`的默认比较行为。

    ```javascript
    var list = [1,2,3,11]
    list.sort()                                             #[1,11,2,3]
    list.sort(function(x,y){return x-y})                    #[1,2,3,11]
    ```

###操作方法
`concat()` | `slice()` | `splice()`

*   `concat()`可以合并数组

    ```javascript
    var list = [1,2,3]                                      #[1,2,3]
    var list_2 = list.concat()                              #[1,2,3]
    var list_3 = list.concat(4,5,[6,7,8])                   #[1,2,3,4,5,6,7,8]
    ```
*   `slice()`切片方法接受1~2个参数。1个参数的表示返回从当前位置到末尾的新数组，类似于`list[index:]`; 2个参数表示返回从第一个参数到第二个参数（不包含第二个参数）的新数组，类似于`list[start,end]`。如果输入的参数为负数，表示从数组末尾往前数。

    ```javascript
    var list = [0,1,2,3,4]
    var new_list = list.slice(2)                            #[2,3,4]
    new_list = list.slice(2,4)                              #[2,3]
    new_list = list.slice(-2)                               #[3,4]
    new_list = list.slice(-4,-2)                            #[1,2]
    ```
*   `splice()`是对数组的操作方法，可以实现数组的增删改查功能，其输入参数格式如下：`splice(起始位置，要删除的项数，要插入的项)`，其中起始位置表示操作的起始index，要删除的项目表示从其实位置要删除几条数据，要插入的项表示都有哪些数据要插入(可以插入多项)
    *   删除: `splice(起始位置, 删除的项数)`
    *   插入：`splice(起始位置, 0, 插入的数据)`
    *   替换：`splice(起始位置, 1, 替换的数据)`
*   测试代码如下：

    ```javascript
    var list = [0,1,2,3,4]
    list.splice(1,2)                                        #[0,3,4]
    list.splice(1,0,1,2)                                    #[0,1,2,3,4]
    list.splice(1,1,5,6)                                    #[0,5,6,2,3,4]
    ```
