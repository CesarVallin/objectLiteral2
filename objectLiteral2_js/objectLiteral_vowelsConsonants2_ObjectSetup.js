// JS file for objectLiteral_vowelsConsonants2.html
// Object set up file
"use strict";
console.log(`hello from objectLiteral_vowelsConsonants2_ObjectSetup.js!`);

// declaring an empty array, to push object literal notation to, in the form of property-value pairs. 
var infoArray = [];

// establishing property:value pairs, passing function's return values on the :value side.
	// notice, accessing index 0 and index 1 of functions returning an array of values.  
infoArray.push({
	generalText: "First function -vowels-", 
	letters: vowelCount(sequence)[0],
	letters2: vowelCount(sequence)[0].join(""),
	counter: vowelCount(sequence)[1]
});

infoArray.push({
	generalText: "Second function -consonants-",
	letters: consonantCount(sequence)[0], 
	letters2: consonantCount(sequence)[0].join(""), 
	counter: consonantCount(sequence)[1]  
});

/*
YOU RECEIVED AN ERROR MESSAGE THE FIRST TIME HERE: vowelCount() is not defined in this page!
The original set up in html had this file, _ObjectSetup.js script tag listed before the _Functions.js script tag. 
Your corrections were: 
	- To place the _Functions.js link -script tag- above the _ObjectSetup.js link -script tag- in the html document.
	- Or to place the -object literal notation- code below inside the _Functions.js file or in-line script in html, 
		avoiding the use of _ObjectSetup.js all together. 
	- All corrections worked!
Good learning!
*/

