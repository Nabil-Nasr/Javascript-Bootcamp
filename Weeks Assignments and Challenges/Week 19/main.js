//A001 
// function Car(name, model, price) {
// 	this.n = name;
// 	this.m = model;
// 	this.p = price;
// }

class Car {
	constructor(name, model, price) {
		this.n = name;
		this.m = model;
		this.p = price;
	}
	run() {
		return `Car Is Running Now`;
	}
	stop() {
		return `Car Is Stopped`;
	}
}
let car1 = new Car("Tesla", "2021", "15000$");
let car2 = new Car("Ford", "2022", "17000$");
let car3 = new Car("BMW", "2020", "20000$");

console.log(
	`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`
);
console.log(car1.run());

("Car One Name Is MG And Model Is 2022 And Price Is 420000");
("Car Is Running Now");
//========================================================

//A002
class Phone {
	constructor(name, serial, price) {
		this.name = name;
		this.serial = serial;
		this.price = price;
	}
}

class Tablet extends Phone {
	//we can put the default of size as size="Unknown"
	constructor(name, serial, price, size = "Unknown") {
		super(name, serial, price);
		//we can put the default of size as this.size=size||"Unknown"
		this.size = size;
	}
	fullDetails() {
		return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
	}
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
//========================================================

//A003
// Edit The Class
class User {
	#c;
	constructor(username, card) {
		this.u = username;
		this.#c = card;
	}
	get showData() {
		return `Hello ${this.u} Your Credit Card Number Is ${(this.#c + "")
			.match(/\d{4}/g)
			.join("-")}`;

		// complex solution
		// return `Hello ${this.u} Your Credit Card Number Is ${(this.#c + "").replaceAll(/\d{4}/g, '$&-').slice(0, -1).replaceAll(/--/g, "-")}`;
	}
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
//========================================================

//A004
String.prototype.addLove = function () {
	return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
//========================================================

//A005
const myObj = {
	username: "Elzero",
	id: 100,
	score: 1000,
	country: "Egypt",
};

Object.defineProperty(myObj, "score", {
	writable: false,
});
Object.defineProperty(myObj, "id", {
	enumerable: false,
});
delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
	console.log(`${prop} => ${myObj[prop]}`);
}
// id shows in the browser console but not in the terminal
console.log(myObj);
// Needed Output

("username => Elzero");
("score => 1000");
("{ username: 'Elzero', score: 1000, id: 100; }");
//========================================================
