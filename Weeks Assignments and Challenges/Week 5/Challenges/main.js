//  Condition Met Challenge

let st = "Elzero Web School";

//  1
if (typeof st === typeof "w") console.log("Good");

//  2
if (st !== "string") console.log("Good");

//  3
if (typeof st.length === "number") console.log("Good");

//  4
if (st.split(" ")[0].repeat(2) === "ElzeroElzero") console.log("Good");

// ===================================================================


//  If And Switch Toggle

let job = "Manager";
let salary = 0;

//  1
//convert it to switch
if (job === "Manager")
    salary = 8000;
else if (job === "IT" || job === "Support")
    salary = 6000;
else if (job === "Developer" || job === "Designer")
    salary = 7000;
else
    salary = 4000;

console.log(salary);
//after convert
switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
}
console.log(salary);

//  2
let holydays = 0;
let money = 0;

//convert it to if
switch (holydays) {
    case 0:
        money = 5000;
		console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
		console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
		console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
		console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
		console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
		console.log(`My Money is ${money}`);
}


//after convert
if (holydays === 0)
    money = 5000;
else if (holydays === 1 || holydays === 2)
    money = 3000;
else if (holydays === 3)
    money = 2000;
else if (holydays === 4)
    money = 1000;
else if (holydays === 5)
    money = 0;
else
    money = 0;

console.log(`My Money is ${money}`);

// ===================================================