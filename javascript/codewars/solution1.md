---
layout: javascript_item
permalink: /javascript/codewars/1/
title: "CodeWars Solution 1"
date: "2014-03-08 02:12:52 +0200"
author: wh1100717
version: 1.0.0
categories: [release]
---

##[kyu 7] Return the Missing Element
###Description
Fellow code warrior, we need your help! We seem to have lost one of our array elements, and we need your help to retrieve it! Our array, superImportantArray, was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.

###Examples

```javascript
getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3
```

###Solution(coffee)

```javascript
getMissingElement = (superImportantArray) -> return i for i in [0..9] when i not in superImportantArray
```

---

##[kyu-7] Pluck
###Descript
Implement pluck, which takes an array of objects and a property name, and returns an array containing the named property of each object.

For example:

```javascript
pluck([{a:1}, {a:2}], 'a') // -> [1,2]
```

If an object is missing the property, you should just leave it as undefined in the output array.

###Solution(coffee)

```javascript
pluck = (objs, name) -> obj[name] for obj in objs
```

---

##[kyu-7] Disemvowel Trolls
###Description
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

###Solution

```javascript
disemvowel = (s) -> s.replace /[aoeiu]/gi, ''
```

---

##[kyu-7] Boiled Eggs
###Description 
You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

Your Task:

Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules:

you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
###Solution

```javascript
cookingTime = (eggs) -> Math.ceil(eggs/8) * 5
```

---

##[kyu-7] Occurrences in a string
###Description
Write a function that determines how often each character occurs in a given string.

For instance:

```javascript
occurrences "This is an example string."
```

would return

```javascript
{"t":2,"h":1,"i":3,"s":3," ":4,"a":2,"n":2,"e":2,"x":1,"m":1,"p":1,"l":1,"r":1,"g":1,".":1}
```

Object keys should be lowercase.

###Solution

```javascript
occurrences = (str) -> new -> @[s] = (@[s] ? 0) + 1 for s in str.toLowerCase();@
```

---

##[kyu-7] Refactored Greeting
###Description
The following code could use a bit of object oriented artistry. While its a simple method and works just fine as it is, in a larger system its best to organize methods into classes/objects. Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:

```javascript
joe = new Person('Joe')
joe.greet('Kate') # should return 'Hello Kate, my name is Joe'
joe.name # should == 'Joe'
```

###Solution

```javascript
class Person
	constructor: (@name) ->
	greet: (yourName) -> "Hello #{yourName}, my name is #{@name}"
```

---

##[kyu-6] Throwing Darts
###Description
Description:

You've just recently been hired to calculate scores for a Dart Board game! 

>Scoring specifications:

>0 points - radius above 10

>5 points - radius between 5 and 10 inclusive

>10 points - radius less than 5

>If all radiuses are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radiuses (can be integers and/or floats), and returns a total score using the above specification.
An empty array should return 0.

Examples:

```javascript
scoreThrows( [1, 5, 11] ) => returns 15 
scoreThrows( [15, 20, 30] ) => returns 0 
scoreThrows( [1, 2, 3, 4] ) => returns 140
```

###Solution:

```javascript
scoreThrows = (radiuses) ->
	for r in radiuses
		p = (p ? 0) + 5 if r <= 10
		p = (p ? 0) + 5 if r < 5
	p = (p ? 0) + 100 if p and p/10 is radiuses.length
	return p ? 0
```

---

##[kyu-6] Matrix Addition
###Description
Write a function that accepts two square matrices (nxn two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size nxn (square), containing only integers.

How to sum two matrices: 

Take each cell `[n][m]` from the first matrix, and add it with the `[n][m]` cell from the second matrix. This will be cell `[n][m]` in the solution matrix.

```javascript
Visualization: 
|1 2 3|
|3 2 1| 
|1 1 1|
+
|2 2 1|
|3 2 3| 
|1 1 3|
=
|3 4 4|
|6 4 4| 
|2 2 4|
```

Example function call:

```javascript
matrixAddition( [ [1, 2, 3], [3, 2, 1,], [1, 1, 1] ], [ [2, 2, 1], [3, 2, 3], [1, 1, 3] ] );
returns [ [3, 4, 4], [6, 4, 4], [2, 2, 4] ]
```

###Solution

```javascript
matrixAddition = (a, b) -> new -> i[jndex] += b[index][jndex] for j,jndex in i for i,index in a
```

---

##[kyu-6] Arrays Similar
###Description
Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

```javascript
var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
```

###Solution

```javascript
arraysSimilar = (a1, a2) ->
	a1.sort()
	a2.sort()
	return false if a1.length isnt a2.length
	return false for i, index in a1 when a1[index] isnt a2[index]
	return true
```

---

##[keyu-6] Manhattan Distance
###Description
The distance formula can be used to find the distance between two points. What if we were trying to walk from point A to point B, but there were buildings in the way? We would need some other formula..but which?

Manhattan Distance

Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

Write a function `manhattanDistance` that accepts two points, pointA and pointB, and returns the Manhattan Distance between the two points.

pointA and pointB are arrays containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.

Examples:

```javascript
manhattanDistance( [1, 1], [1, 1] ) => returns 0
manhattanDistance( [5, 4], [3, 2] ) => returns 4
manhattanDistance( [1, 1], [0, 3] ) => returns 3
```

Resources:

http://en.wiktionary.org/wiki/Manhattan_distance
http://en.wikipedia.org/wiki/Manhattan_distance

###Solution

```javascript
manhattanDistance = (pointA, pointB) -> Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1])
```

---

##[kyu-6] Remove anchor from URL
###Description
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

```javascript
# returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

# returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')
```

###Solution

```javascript
removeUrlAnchor = (url) -> url.split('#')[0]
```

---

##[kyu-6] Array.diff
###Description
Your goal in this kata is to implement an array_diff function, which subtracts one array from another.

It should remove all values from array a, which are present in array b.

```javascript
array_diff([1,2], [1]) // [2]
```

If a value is present in array b, all of its occurrences must be removed from array a.

```javascript
array_diff([1,2,2], [2]) // [1]
```

###Solution

```javascript
array_diff = (a, b) -> i for i in a when (i not in b)
```

---

##[kyu-6] Find the Mine!
###Description
You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function `mineLocation` that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

Examples:

```javascript
mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0] 
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1] 
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]
```

###Solution

```javascript
mineLocation = (a) -> 
	for i,index in a 
		for v,vndex in i when v is 1
			return [index, vndex]
```

---

##[kyu-5] Moving Zeros To The End
###Description

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```javascript
moveZeros [false,1,0,1,2,0,1,3,"a"] # returns[false,1,1,2,1,3,"a",0,0]
```

##Solution

```javascript
moveZeros = (arr) -> arr.filter((a)-> a isnt 0).concat arr.filter((a)-> a is 0)
```

---

##[kyu-5] flatten()
###Description
For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

```javascript
flatten(1, [2, 3], 4, 5, [6, [7]]) # returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) # returns ['a', 'b', 2, 3, null, 4, 'c']
```

##Solution

```javascript
flatten = (list...)->
	result = []
	for arg in list
		if arg instanceof Array
			result.push flatten(arg...)...
		else
			result.push arg
	return result
```

---

##[kyu-6] Once
###Description
You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

```javascript
logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
```

###Solution

```javascript
once = (fn, flag = true) -> ->
	if flag
		flag = false
		fn(arguments...)
```

---

##[kyu-6] Holiday Shopping Priority Queue
###Description
####Happy Holidays fellow Code Warriors! 

The holidays are just around the corner. You know what that means...Holiday Shopping! I was planning on buying all you Code Warriors a gift, but I don't know which order to buy them! I have a small shopping list that I'm constantly adding to, and all of the items have a certain priority. What if I use a priority queue?

####Holiday Shopping Priority Queue

Priority queues are similar to queues, but they add a priority to each data entry, so items with higher priorities (lower integer values) are processed first.

While I'm running around buying the gifts, I need you to write a few methods for the HolidayPriorityQueue class to help me out. The class needs two methods: addGift and buyGift. For this Kata, all priorities will be unique, so no need to worry about equal priorities.

Method descriptions:

`addGift` (or enqueue) adds a gift to the priority queue. This method should accept one object (or hash in ruby), which has two properties: gift - the name of the gift, and priority - the priority of the gift, and should return the new length of the queue. All gifts will be in this form.

`buyGift` (or dequeue) removes the gift with the highest priority from the priority queue, and returns the gifts name (value of the gift property). If the queue is empty, return the empty string ''

Examples:

Javascript/CoffeeScript

```javascript
var giftList = new HolidayPriorityQueue();
giftList.addGift( { gift: 'Water gun', priority: 1} );// => returns 1
giftList.addGift( { gift: 'Toy truck', priority: 4 } );// => returns 2
giftList.addGift( { gift: 'Roller Skates', priority: 3 } );// => returns 3

giftList.buyGift();// => returns 'Water gun'
giftList.buyGift();// => returns 'Roller Skates'
giftList.buyGift();// => returns 'Toy truck'
```

###Solution

```javascript
class HolidayPriorityQueue
	constructor: () ->
		@gift_list = []
  
HolidayPriorityQueue::addGift = (gift) ->
	@gift_list.push gift
	return @gift_list.length

HolidayPriorityQueue::buyGift = ->
	if @gift_list.length is 0
		return ""
	max_priority = undefined
	max_index = 0
	for gift, index in @gift_list
		if index is 0
			max_priority = gift.priority
		else if gift.priority < max_priority
			max_index = index
			max_priority = gift.priority
	max_name = @gift_list[max_index].gift
	@gift_list = @gift_list[0...max_index].concat @gift_list[max_index+1...]
	return max_name
```

---

##[kyu-5] Vector class
###Description
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

```javascript
a = new Vector([1,2,3])
b = new Vector([3,4,5])
c = new Vector([5,6,7,8])
a.add(b) # should return Vector([4,6,8])
a.subtract(b) # should return Vector([-2,-2,-2])
a.dot(b) # should return 1*3+2*4+3*5 = 26
a.norm() # should return sqrt(1^2+2^2+3^2)=sqrt(14)
a.add(c) # throws an error
```

If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

*   a toString function, so that using the vectors from above, a.toString() === '(1,2,3)'
*   an equals function, so that two vectors who have the same components are equal

The test cases will utilize the user-provided equals method.

###Solution

```javascript
class Vector
	constructor: (@v) ->

	value: -> @v

	toString: -> "(" + @v.join(",") + ")"

	equals: (n) ->
		n = n.value()
		return false if @v.length isnt n.length
		for i in @v
			return false if i not in n
		return true

	add: (n) ->
		n = n.value()
		throw "error" if n.length isnt @v.length
		tmp = []
		for i, index in @v
			tmp.push i + n[index]
		return {'equals': (m)->
			m = m.value()
			return false if m.length isnt tmp.length
			for i,index in tmp
				return false if i isnt m[index]
			return true
		}


	subtract: (n) ->
		n = n.value()
		throw "error" if n.length isnt @v.length
		tmp = []
		for i, index in @v
			tmp.push i - n[index]
		return {'equals': (m)->
			m = m.value()
			return false if m.length isnt tmp.length
			for i,index in tmp
				return false if i isnt m[index]
			return true
		}

	dot: (n) ->
		n = n.value()
		throw "error" if n.length isnt @v.length
		tmp = 0
		for i, index in @v
			tmp += @v[index] * n[index]
		return tmp

	norm: ()->
		val = 0
		for i in @v
			val += i*i
		return Math.sqrt(val)
```

---

##[kyu-5] Convert CamelCase string into snake_case
###Description
Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

Examples:

```javascript
#  returns test_controller
toUnderscore 'TestController'

# returns movies_and_books
toUnderscore 'MoviesAndBooks'

# returns app7_test
toUnderscore 'App7Test'

# returns "1"
toUnderscore 1
```

###Solution

```javascript
toUnderscore = (str) ->
	return String(str) if typeof str is 'number'
	return str.replace(/[A-Z]/g, (s)->'_'+s.toLowerCase())[1...]
```

---

##[kyu-5] Grab CSV Columns
###Description
Write a function called csvColumns that takes a CSV (format shown below) and an array of indices, which represents the columns of the CSV, and return a CSV with only the columns specified in the indices array.

CSV format: 
The CSV passed in will be a string and will have one or more columns, and one or more rows. The CSV will be of size NxM. Each row is separated by a new line character (\n). There will be no spaces in the CSV string.

```javascript
Example format of passed in CSV: "1,2,3\n4,5,6\n7,8,9\n10,11,12" 
How it would look: 
1,2,3
4,5,6
7,8,9
10,11,12
```

Indices Array info: 

The indices will be zero based, so the first column will be represented as a 0 in the indices array. All values in the indices array will be integers from 0 and up. All test cases will have an indices array of one or more integers. Ignore indices that map to a column that doesn't exist. If all the values in the indices array do NOT map to any existing column, return an empty string ("").

Examples: 

```javascript
csvColumns( "1,2,3\n4,5,6" , [0, 1] ) => returns "1,2\n4,5" 
csvColumns( "1,2\n3,4\n5,6" , [5, 6, 7] ) => returns "" 
csvColumns( "a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j" , [1, 3, 5, 7] ) => returns "b,d\n2,4\ng,i"
```

###Solution

```javascript
csvColumns = (csv, indices) ->
	csv_list = csv.split("\n")
	result = []
	for csv ,index in csv_list
		numbers = csv.split(",")
		n = []
		for number,nndex in numbers
			n.push number if nndex in indices
		result.push n if n.join(",") isnt ""
	return result.join("\n")
```

---

##[kyu-5] Longest sequence with zero sum
###Description
Write a method which takes an array of integers (positive and negative) and returns the longest contiguous sequence in this array, which total sum of elements equal 0.

For example:

```javascript
maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])
```

Should return `[92, -115, 17, 2, 2, 2]`, because this is the longest zero-sum sequence in the array.

###Solution

```javascript
maxZeroSequence = (arr) ->
	sub_arr = []
	for i in arr
		last_item = sub_arr.pop()
		if last_item is undefined
			sub_arr.push i
		else
			sub_arr.push last_item
			sub_arr.push i + last_item
	hash_seq = {}
	max_length = 0
	start_index = 0
	end_index = 0
	for i,index in sub_arr
		if i is 0 and index > max_length
			max_length = index
			start_index = 0
			end_index = index
		if hash_seq[i] and index - hash_seq[i] > max_length
			max_length = index - hash_seq[i]
			start_index = hash_seq[i] + 1
			end_index = index
		else
			hash_seq[i] = index
	return arr[start_index..end_index]
```

---

##[kyu-5] Custom sort function
###Description
Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

Example:

```javascript
sort([1,3,2]) // should return [1,2,3]
```

###Solution

```javascript
sort = (items) ->
	result = []
	for item in items
		if result.length is 0
			result.push item
		else
			for i, index in result
				if item < i
					result.splice(0,0,item)
					break
				else if item is i
					result.splice(index+1,0,item)
					break
				else if item > i and (index+1 is result.length or item < result[index+1])
					result.splice(index+1, 0, item);
					break
				else if index+1 is result.length
					result.push item
	return result
```

---

##[kyu-5] Valid Binary Christmas Tree
###Description
Happy Holidays fellow Code Warriors!

Santa just finished taking a data structures course, and thought it would be a great idea to build a Binary Christmas Tree! All of Santa's helpers created a Binary Christmas Tree, but not all of them meet his requirements. Can you write some code to validate the Binary Christmas Trees?

Valid Binary Christmas Tree

Write a function isValidTree that accepts a Binary Tree, and returns true if it meets Santa's requirements, false otherwise. Since the tree is a binary tree, each node can have 0, 1, or 2 children. The left and right properties can be used to access the current nodes left and right children. All nodes have an ornament property, which is the name of the ornament, and a color property, which represents the color of the ornament.

Santa's Binary Christmas Tree Requirements

A valid Binary Christmas Tree will meet the following requirements:

*   Root node has a 'star' ornament
*   Nodes with zero children (excluding the root node) have a 'blue' colored ornament
*   Nodes with one or two children have a 'red' colored ornament

Examples

```javascript
isValidTree( {
  ornament: 'star', 
  color: 'yellow'
} )// => returns true

isValidTree( {
  ornament: 'star',
  color: 'yellow',
  left: {
    ornament: 'candy cane',
    color: 'blue'
  }
} )// => returns true

isValidTree( {
  ornament: 'star',
  color: 'yellow',
  right: {
    ornament: 'stocking',
    color: 'red'
  }
} )// => returns false
```

###Solution

```javascript
isValidTree = (tree) ->
	return false if tree.ornament isnt "star"
	nodes = []
	nodes.push tree.left if tree.left
	nodes.push tree.right if tree.right

	while true
		node = nodes.pop()
		return true if not node
		count = 0
		if node.left
			console.log 123
			count++
			nodes.push node.left
		if node.right
			console.log 234
			count++
			nodes.push node.right
		
		if count is 0
			return false if node.color isnt 'blue'
		else
			return false if node.color isnt 'red'
```

---

##[kyu-5] Where my anagrams at?
###Description
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

```javascript
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
```

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

```javascript
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', racer']
anagrams('laser', ['lazing', 'lazy', 'lacer'] => []
```

###Solution

```javascript
anagrams = (word, words) ->
	word_dict = {}
	for i in word
		word_dict[i] = (word_dict[i] ? 0) + 1
	result = []
	for ws in words
		flag = true
		continue if ws.length isnt word.length
		w_dict = {}
		for w in ws
			w_dict[w] = (w_dict[w] ? 0) + 1
		for key in Object.keys(word_dict)
			if word_dict[key] isnt w_dict[key]
				flag = false
				break
		result.push ws if flag
	return result
```







