//A001 
let today = Date.now();
let birthday = new Date("2001 1 1");
let ageByMilliseconds = today - birthday;
let seconds = ageByMilliseconds / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 30;
let years = days / 365.25;
console.log(`${seconds.toFixed()} Seconds`);
console.log(`${minutes.toFixed()} Minutes`);
console.log(`${hours.toFixed()} Hours`);
console.log(`${days.toFixed()} Days`);
console.log(`${months.toFixed()} Months`);
console.log(`${years.toFixed()} Years`);
//========================================================

//A002
// let afterTenYears = new Date(
// 	10 * 365.25 * 24 * 60 * 60 * 1000 + 1000 - 14 * 60 * 60 * 1000
// );
// let afterTenYears = new Date(315525601000);//same as above
//or
let afterTenYears = new Date("1980-01-01T00:00:01");
console.log(afterTenYears);
// Needed Output
("Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)");
//========================================================

//A003
let now = new Date();
now.setDate(0);
console.log(now);
let months3 = [
	"January",
	"February",
	"Mars",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
console.log(
	`Previous Month Is ${
		months3[now.getMonth()]
	} And Last Day Is ${now.getDate()}`
);
// Needed Output

("Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)");
("Previous Month Is April And Last Day Is 30");
//========================================================

//A004
let birthday41 = new Date("2001-01-01T00:00:00");
let birthday42 = new Date();
birthday42.setFullYear(2001, 0, 1);
birthday42.setHours(0, 0, 0);
let birthday43 = new Date(2001, 0, 1, 0, 0, 0);
console.log(birthday41);
console.log(birthday42);
console.log(birthday43);
//========================================================

//A005
const t1 = performance.now();

for (let i = 1; i <= 99999; i++) {
	// console.log(i);
}
const t2 = performance.now();
console.log(`Loop Took ${Math.trunc(t2 - t1)} Milliseconds.`);
//========================================================

//A006
function* gen() {
	let num = 7;
	let counter = 0;
	while (true) {
		yield num * 2;
		num += counter * 100 + 70;
		counter++;
	}
}

let generator1 = gen();

console.log(generator1.next()); // {value: 14, done: false}
console.log(generator1.next()); // {value: 154, done: false}
console.log(generator1.next()); // {value: 494, done: false}
console.log(generator1.next()); // {value: 1034, done: false}
console.log(generator1.next()); // {value: 1774, done: false}
console.log(generator1.next()); // {value: 2714, done: false}
console.log(generator1.next()); // {value: 3854, done: false}
console.log(generator1.next()); // {value: 5194, done: false}
console.log(generator1.next()); // {value: 6734, done: false}
console.log(generator1.next()); // {value: 8474, done: false}
//========================================================

//A007
function* genNumbers() {
	yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
	yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
	//by making a Set this will execute all the statements between yield in genNumbers()
	//when starting to make a set
	//then yield every value
	yield* new Set(genNumbers());
	yield* new Set(genLetters());
}

let generator2 = genAll();

console.log(generator2.next()); // {value: 1, done: false}
console.log(generator2.next()); // {value: 2, done: false}
console.log(generator2.next()); // {value: 3, done: false}
console.log(generator2.next()); // {value: 4, done: false}
console.log(generator2.next()); // {value: 5, done: false}
console.log(generator2.next()); // {value: "A", done: false}
console.log(generator2.next()); // {value: "B", done: false}
console.log(generator2.next()); // {value: "C", done: false}
console.log(generator2.next()); // {value: "D", done: false}
//========================================================

//A008
import calc from "./mod-one.js"
//or
// import {default as calc} from "./mod-one.js"//same of above
import * as modOne from "./mod-two.js"
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
//========================================================


