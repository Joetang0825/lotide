# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install joetang0825/lotide`

**Require it:**

`const _ = require('joetang0825/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(ar1, ar2)`: Compare two arrays using eqArray() and display message to confirm if the actual result matches the expected result
* `assertEqual(actual, expected))`: Display message to indicate if the actual result matches the expected result
* `assertObjectsEqual(actual, expected))`: Check if number of keys from 2 objects are the same
* `countLetters(sentence))`: Count the occurences of letter in a sentence
* `countOnly(allItems, itemsToCount))`: Count the number of occurence of object keys in an array 
* `eqArrays(array1, array2))`: Compare 2 arrays to see if they are the same
* `eqObjects(object1, object2))`: Check if 2 objects are the same
* `findKey(objects, callback))`: Find the key in Objects by providing a callback function
* `findKeyByValue(showObj, Name))`: Search key's value in an object and return the key
* `flatten(nestedArray))`: Assume at most there is only 1 level of array inside the test array and extract all elements from all the array(s) inside to one new array
* `head(Array))`: Return first element in an array
* `letterPositions(sentence))`: Find the position of every unique character in the sentence, with index starting at 0
* `map(array, callback))`: Create an array that store the result of a callback function
* `middle(array))`: Return the middle element(s) of an array
* `tail(Array))`: Return an array of all elements passed in, except the first element 
* `takeUntil(array, callback))`: Take an array and return each elements until the condition in the callback is satisfied
* `without(source, itemsToRemove))`: Remove elements from source array that match element from itemsToTRemove array
