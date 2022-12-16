//first
//A001
console.log(100 == "100"); // true
console.log(100 < 1000); // true 
console.log(110 < 100 < 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 === typeof +"-40"); // true
console.log(typeof 10 == typeof -"-40"); // true
console.log(-"10" === -10); // true
console.log(-20 < false); // true
//===================================================

//A002
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num2 >= num1); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(num2 + "" <= typeof num1); // true
console.log(!(num1 === num2)); // true
//===================================================

//A003
let a = 20;
let b = 30;
let c = 10;

console.log((a == b && a * c) || a < b); // true
console.log(a - b + a === c); // true
console.log(!(a > b) && !(a >= b) && !(a < c) && !(a == c)); // true
//===================================================
//================================================================

//second
//A001

// let num = 9; // "009"
let num = 20; // "020"
// let num = 110; // "110"
if (num < 10) {
	console.log("00" + num);
} else if (num > 10 && num < 100) {
	console.log("0" + num);
} else if (num >= 100) {
	console.log("" + num);
}
//===================================================

//A002
let num3 = 9;
let str = "9";
let str2 = "20";

if (num3 == str) {
	console.log("{num3} Is The Same Value As {str}");
}
if (num3 == str && num3 !== str) {
	console.log("{num3} Is The Same Value As {str} But Not The Same Type");
}
if (num3 != str2 && typeof num3 !== typeof str2) {
	console.log("{num3} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof str === typeof str2 && str != str2) {
	console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
//===================================================

//A003
let num4 = 10;
let num5 = 30;
let num6 = "30";

if (
	num6 > num4 &&
	typeof num6 !== typeof num5 &&
	num6 == num5 &&
	num6 !== num5 &&
	num6 != num4 &&
	typeof num6 !== typeof num4
) {
	console.log(
		`${num6} Is Larger Than ${num4} And Type ${typeof num6} Not The Same Type As ${typeof num5}`
	);
	console.log(
		`${num6} Is Larger Than ${num4} And Value Is The Same As ${num5} And Type ${typeof num6} Not The Same Type As ${typeof num5}`
	);
	console.log(
		`{num6} Value And Type Is Not The Same As {num4} And Type Is Not The Same As {num5}`
	);
}
//===================================================

//A004
// Edit What You Want Here

let num7 = 10;
let num8 = 9;
let num9 = 10;
let num10 = 32;

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (num7 > num8) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 2

if (num7 > num8 && num7 < num10) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 3

if (num7 > num8 && num7 === num9) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 4

if (num7 + num8 < num10) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 5

if (num7 + num9 < num10) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 6

if (num7 + num8 + num9 < num10) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 7

if (num10 - (num7 + num9) + num8 === 21) {
	console.log("True");
} else {
	console.log("False");
}
//===================================================
//================================================================

//third
//A001
let day = " friday  ";

day = day.trim();
day = day[0].toUpperCase() + day.substring(1).toLowerCase();

switch (day) {
	case "Friday":
	case "Saturday":
	case "Sunday":
		console.log("No Appointments Available");
		break;
	case "Monday":
	case "Thursday":
		console.log("From 10:00 AM To 5:00 PM");
		break;
	case "Tuesday":
		console.log("From 10:00 AM To 6:00 PM");
		break;
	case "Wednesday":
		console.log("From 10:00 AM To 7:00 PM");
		break;
	default:
		console.log("Its Not A Valid Day");
} 
//===================================================
//================================================================
