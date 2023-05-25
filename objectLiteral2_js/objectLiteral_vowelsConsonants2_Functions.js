// JS file for objectLiteral_vowelsConsonants2.html
// functions file
"use strict"
console.log(`hello from objectLiteral_vowelsConsonants2_Functions.js !!`);

// capture user input:
let sequence = prompt(`Enter a string`);
console.log(sequence);

// 1st function, count & display vowels:
function vowelCount(peekaboo) {
	peekaboo = peekaboo.toLowerCase();
	let counter = 0;
	let vowels = [];
	let result = []; // notice result is set up as an empty array, will be used to house vowels[] & counter!
	for (var i = 0; i < peekaboo.length; i++) { // iterate through peekaboo
		if (peekaboo[i] === "a" || peekaboo[i] === "e" || peekaboo[i] === "i" || peekaboo[i] === "o" || peekaboo[i] === "u") {
			vowels.push(peekaboo[i]);
			counter += 1;
		}
	}
	result.push(vowels);
	result.push(counter);
	return result; // result is now an array containing two elements, index 0 vowels, and index 1 counter!
}
console.log(vowelCount(sequence));

// 2nd function, count & display consonants:
function consonantCount(peekaboo) {
	peekaboo = peekaboo.toLowerCase();
	let counter = 0;
	let consonants = [];
	let result = [];
	for (var i = 0; i < peekaboo.length; i++) {
		if (peekaboo[i] === "a" || peekaboo[i] === "e" || peekaboo[i] === "i" || peekaboo[i] === "o" || peekaboo[i] === "u") {
			continue;
		} else if (peekaboo[i] === " ") { // to skip a typed space in the sequence. 
			continue;
		} else {
			consonants.push(peekaboo[i]);
			counter += 1;
		}
	}
	result.push(consonants);
	result.push(counter);
	return result; // result is now an array containing two elements, index 0 consonants, and index 1 counter!
}
console.log(consonantCount(sequence));

/* 
Experimental manipulation & indexing! it works!
let empty = [];
empty.push(vowelCount(sequence)[0]);
console.log(empty); // to show that you can manipulate a specific index*value from the return of a function returning multiple values!
console.log(vowelCount(sequence)[0]); // this shows the specific index*value from the return of a function returning multiple values!

let notFull = [];
notFull.push(vowelCount(sequence)[1]);
console.log(notFull);
console.log(vowelCount(sequence)[1]);
*/

// 3rd function, to purposefully receive a parameter "i" -index*value iteration- through the local scope of a for loop.
	// this will be used to access all elements -property:value pairs- of the infoArray[] array.  
function renderArrayElements(peekaboo) {
	document.write("<h2>" + infoArray[peekaboo].generalText + "</h2>");
	document.write("<p>" + infoArray[peekaboo].letters + "</p>");
	document.write("<p>" + infoArray[peekaboo].letters2 + "</p>");
	document.write("<p>" + infoArray[peekaboo].counter + "</p>");
}

/*
The above funciton, purposefully designed to receive "i" as its new parameter.  All peekaboo will take on the value of i. 
	renderArrayElements(peekaboo) ... same as ... renderArrayElements(i)
	infoArray[peekaboo] ... same as ... infoArray[i]

You can equally choose to execute the code below, in the local scope of the for loop.  
Notice that here, infoArray[i] is written to match a typical for loop declaration (var i = 0; i < infoArray.length; i++).  

document.write("<h2>" + infoArray[i].generalText + "</h2>");
document.write("<p>" + infoArray[i].letters + "</p>");
document.write("<p>" + infoArray[i].letters2 + "</p>");
document.write("<p>" + infoArray[i].counter + "</p>");
*/












