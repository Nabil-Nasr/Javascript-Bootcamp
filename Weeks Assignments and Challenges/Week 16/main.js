//A001
let myNumbers = [1, 2, 3, 4, 5];
let [x, , , , y] = myNumbers;
console.log(x * y); //5
//============================================================

//A002
let mySkills = [
	"HTML",
	"CSS",
	"JavaScript",
	["PHP", "Python", ["Django", "Laravel"]],
];

let [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
//============================================================

//A003
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let [[, a3, b3], [c3]] = [arr3, arr1];
console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);

// My Best Friends: Shady, Mahmoud, Ahmed
//============================================================

//A004
const member = {
	age: 30,
	working: false,
	country: "Egypt",
	hobbies: ["Reading", "Swimming", "Programming"],
};

let {
	age: a4,
	working: w,
	country: c4,
	hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a4} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c4}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
//============================================================

//A005
const game = {
	title: "YS",
	developer: "Falcom",
	releases: {
		"Oath In Felghana": ["USA", "Japan"],
		"Ark Of Napishtim": {
			US: "20 USD",
			JAP: "10 USD",
		},
		Origin: "30 USD",
	},
};

let { title: tt, developer: dd, releases } = game;
let [[oo, [uu, jj]], [aa, { US: u_price, JAP: j_price }], [, or]] =
	Object.entries(releases);

console.log(`My Favourite Games Style Is ${tt} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${dd} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${oo} It Released in ${uu} & ${jj}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${aa}`);
// Although I Love Ark Of Napishtim

console.log(`${aa} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${aa} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
//============================================================

//A006
let chosen = 2;

let myFriends = [
	{ title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
	{ title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
	{ title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let title, age, available, lastSkill;

switch (chosen) {
	case 1:
		[
			{
				title,
				age,
				available,
				skills: [, lastSkill],
			},
		] = myFriends;
		break;
	case 2:
		[
			,
			{
				title,
				age,
				available,
				skills: [, lastSkill],
			},
		] = myFriends;
		break;
	case 3:
		[
			,
			,
			{
				title,
				age,
				available,
				skills: [, lastSkill],
			},
		] = myFriends;
		break;
}


// the simplest solution 👍👍👍👍👍👍👍👍
// same result of the solution above
// if (chosen >= 1 && chosen <= 3) {
// 	var { title, age, available, skills: [, lastSkill] } = myFriends[chosen - 1];
// }


console.log(title);
console.log(age);
console.log(available ? "Available" : "Not available");
console.log(lastSkill);
//============================================================
