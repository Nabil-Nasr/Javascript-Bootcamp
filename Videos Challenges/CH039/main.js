let job = "Manager";
let salary = 0;

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


//convert it to if
let holydays = 0;
let money = 0;
switch (holydays) {
    case 0:
        money = 5000;
        break;
    case 1:
    case 2:
        money = 3000;
        break;
    case 3:
        money = 2000;
        break;
    case 4:
        money = 1000;
        break;
    case 5:
        money = 0;
        break;
    default:
        money = 0;
}

console.log(`My Money is ${money}`);


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