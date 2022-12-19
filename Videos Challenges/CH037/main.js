let a = 10;

//  Before converting to if shorthand
if (a < 10) console.log(10);
else if (a >= 10 && a <= 40) console.log("10 to 40");
else if (a > 40) console.log("> 40");
else console.log("unknown");

//  After converting to if shorthand
a < 10
	? console.log(10)
: a >= 10 && a <= 40
	? console.log("10 to 40")
: a > 40 ? 
	console.log("> 40") : console.log("unknown");

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") console.log("Good");

if (st[st.indexOf("W")].toLowerCase() === "w") console.log("Good");

// or
if (typeof st === typeof "w") console.log("Good");

if (st !== "string") console.log("Good");

if (typeof st.length === "number") console.log("Good");

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") console.log("Good");
