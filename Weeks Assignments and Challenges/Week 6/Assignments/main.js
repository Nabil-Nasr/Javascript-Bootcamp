//A001
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(num - num, num)); // ["Ahmed", "Elham", "Osama"];
//==============================================

//A002
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]
//==============================================

//A003
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//==============================================

//A004
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
	words[website.length][website.length - website.length]
		.substring(website.length)
		.toUpperCase()
); // ZERO
//==============================================

//A005
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
	console.log("Found");
}
if (haystack.lastIndexOf(needle) !== -1) {
	console.log("Found");
}
if (haystack[haystack.length - needle.length] === needle) {
	console.log("Found");
}
//==============================================

//A006
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1
	.concat(arr2)
	.sort()
	.join("")
	.substring(arr2.length)
	.toLowerCase();

console.log(allArrs); // fxy
//==============================================
