//A001 
let member = {
	name: "Elzero",
	age: 38,
	country: "Egypt",
	fullDetails: function () {
		return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`;
	},
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt
//=====================================================

//A002
// Method One
let objMethodOne = {
	property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = {};
Object.assign(objMethodTwo, { property: "Method Two" });
//or
// let objMethodTwo = Object.assign({}, { property: "Method Two" });
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create({ property: "Method Three" });
console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = {};
Object.setPrototypeOf(objMethodFour, { property: "Method Four" });
//or
// let objMethodFour = Object.setPrototypeOf({}, { property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"

// Method Five
let objMethodFive = new Object({ property: "Method Five" });
console.log(objMethodFive.property); // "Method Five"
//=====================================================

//A003
let a = 1;

let threeNums = {
	b: 2,
	c: 3,
	d: 4,
};

let twoNums = {
	e: 5,
	f: 6,
};

let finalObject = Object.assign({ a: a }, threeNums, twoNums);

console.log(finalObject);

/*
	a: 1
	b: 2
	c: 3
	d: 4
	e: 5
	f: 6
*/
//=====================================================

//A004
// The Object To Work With
let myFavGames = {
	"Trinity Universe": {
		publisher: "NIS America",
		price: 40,
	},
	"Titan Quest": {
		publisher: "THQ",
		bestThree: {
			one: "Immortal Throne",
			two: "Ragnarök",
			three: "Atlantis",
		},
		price: 50,
	},
	YS: {
		publisher: "Falcom",
		bestThree: {
			one: "Oath in Felghana",
			two: "Ark Of Napishtim",
			three: "origin",
		},
		price: 40,
	},
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;


for (let i = 0; i < objectLength; i++) {
	console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
	//first way to access properties
	console.log(
		`The Publisher Is ${Object.entries(myFavGames)[i][1].publisher}`
	);
	//second way
	console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

	// Check If Nested Object Has Property (bestThree)
	if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
		console.log("- Game Has Releases");
		console.log(
			`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
		);
		console.log(
			`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
		);
		console.log(
			`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
		);
	}
	console.log("#".repeat(20));
}
//=====================================================
