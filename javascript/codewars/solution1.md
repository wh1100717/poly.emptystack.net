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



