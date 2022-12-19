//A001 
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers].pop());
//======================================================

//A002
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());
// Needed Output
(4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];
//======================================================

//A003
let myInfo = {
	username: "Osama",
	role: "Admin",
	country: "Egypt",
};
let myInfoMap = new Map(Object.entries(myInfo));
console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));
// Needed Output
// Map(3) { 'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'; }
// 3;
// true;
//======================================================

//A004
let theNumber = 100020003000;
console.log(+[...new Set(`${theNumber}`)].sort().join(""));
// Needed Output
123;
//======================================================

//A005
let theName = "Elzero";
console.log([...theName]);  // 1
console.log(theName.split(""));  // 2
console.log([...new Set(theName)]); // 3
console.log(Array.from(theName)); // 4
let arr = [];
for (let char of theName) {
	arr.push(char);
}
console.log(arr); // 5
console.log(Object.assign([], theName)); // 6
// Needed Output
["E", "l", "z", "e", "r", "o"];
//======================================================

//A006
function a006(arr) {
	if (Array.isArray(arr)) {
		let numCounter = 0;
		let nums = [];
		arr = arr.filter(function (elem) {
			if (isNaN(elem)) {
				return true;
			}
			nums.push(elem);
			return false;
		});
		numCounter = nums.length;
		arr.unshift(...nums);
		arr.copyWithin(0, numCounter, numCounter * 2);
	}
	return arr;
}
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(a006(chars));
chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(a006(chars));
chars = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(a006(chars));
//======================================================

//A007
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log(numsOne.concat(numsTwo)); // 1
console.log([...numsOne, ...numsTwo]); // 2
let numsThree = [];
numsThree.push(...numsOne, ...numsTwo);
console.log(numsThree); // 3
for (let num of numsTwo) {
	numsOne.push(num);
}
console.log(numsOne); // 4
// Needed Output
[1, 2, 3, 4, 5, 6];
//======================================================

//A008
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n2)); // 210
//======================================================
