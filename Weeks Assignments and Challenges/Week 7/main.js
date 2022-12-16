//first
//A001
let start1 = 10; 
let end1 = 100;
let exclude1 = 40;
for (let i = start1; i <= end1; i += start1) {
	if (i === exclude1) {
		continue;
	}
	console.log(i);
}
//===================================

//A002
let start2 = 10;
let end2 = 0;
let stop2 = 3;
for (let i = start2; i >= end2; i--) {
	if (i < start2) {
		console.log(`${end2}${i}`);
	} else {
		console.log(i);
	}
	if (i <= stop2) {
		break;
	}
}
//===================================

//A003
let start3 = 1;
let end3 = 6;
let breaker3 = 2;
for (let i = start3; i <= end3; i++) {
	console.log(`${i}\n-- ${breaker3}\n-- ${breaker3 * breaker3}`);
}
//===================================

//A004
let index4 = 10;
let jump4 = 2;
let end4 = 0;

for (;;) {
	if (index4 <= jump4) {
		break;
	}
	console.log(index4);
	index4 -= jump4;
}
//===================================

//A005
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for (let i = letter.length, j = i; i < friends.length; i++) {
	if (!friends[i].startsWith(letter.toUpperCase())) {
		console.log(`${j++} => ${friends[i]}`);
	}
}
//===================================

//A006
let start6 = 0;
let swappedName6 = "elZerO";
swappedName6 = swappedName6.split("");
for (let i = start6; i < swappedName6.length; i++) {
	if (swappedName6[i] == swappedName6[i].toLowerCase()) {
		swappedName6[i] = swappedName6[i].toUpperCase();
	} else {
		swappedName6[i] = swappedName6[i].toLowerCase();
	}
}
swappedName6 = swappedName6.join("");
console.log(swappedName6);
//===================================

//A007
let start7 = 0;
let mix7 = [1, 2, 3, "A", "B", "C", 4];

for (let i = mix7[start7]; i < mix7.length; i++) {
	if (!isNaN(mix7[i])) {
		console.log(mix7[i]);
	}
}
//===================================
//=======================================================

//second
//A001
let friends11 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index11 = 0;
let counter11 = 0;

while (index11 < friends11.length) {
	if (
		isNaN(friends11[index11]) &&
		!friends11[index11].startsWith(
			friends11[index11 - index11][index11 - index11]
		)
	) {
		console.log(`${++counter11} => ${friends11[index11]}`);
	}
	index11++;
}
//===================================
//=======================================================
