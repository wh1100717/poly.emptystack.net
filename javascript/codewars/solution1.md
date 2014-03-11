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

```
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
```
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





