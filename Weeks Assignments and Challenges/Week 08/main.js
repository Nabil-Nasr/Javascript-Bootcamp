//A001 
function sayHello(theName, theGender = "") {
    if (theGender.toLowerCase() == "female") {
        console.log(`Hello Miss ${theName}`);
    } else if (theGender.toLowerCase() == "male") {
        console.log(`Hello Mr ${theName}`);
    } else {
        console.log(`Hello ${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
//=============================================

//A002
function calculate(firstNum, secondNum, operation = "add") {
    if (secondNum === undefined) {
        console.log("Second Number Not Found");
    } else {
        switch (operation.toLowerCase()) {
            case "add":
                console.log(firstNum + secondNum);
                break;
            case "subtract":
                console.log(firstNum - secondNum);
                break;
            case "multiply":
                console.log(firstNum * secondNum);
                break;

            default:
                console.log("Operation Name Isn't Defined");
                break;
        }
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtrACT"); // -10
calculate(20, 30, "multiply"); // 600
//=============================================

//A003
function ageInTime(theAge) {
    if (theAge > 10 && theAge < 100) {
        console.log(`Age in Months => ${theAge * 12} Months`);
        console.log(`Age in Weeks => ${theAge * 12 * 30 / 7} Weeks`);
        console.log(`Age in Days => ${theAge * 12 * 30} Days`);
        console.log(`Age in Hours => ${theAge * 12 * 30 * 24} Hours`);
        console.log(`Age in Minutes => ${theAge * 12 * 30 * 24 * 60} Minutes`);
        console.log(`Age in Seconds => ${theAge * 12 * 30 * 24 * 60 * 60} Seconds`);

    } else {
        console.log("Age Out Of Range");
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
//=============================================

//A004
//using rest parameter is better than 3 parameters
function showDetails(...details) {
    if (details.length === 3) {
        let name, age, status;
        for (let i = 0; i < 3; i++) {
            typeof details[i] === "string" ? name = details[i] : typeof details[i] === "number" ? age = details[i] : typeof details[i] === "boolean" ? status = details[i] : i = 3;
        }
        status !== undefined && name !== undefined && age !== undefined ? console.log(`Hello ${name}, Your Age Is ${age}, You Are${status ? " " : " Not "}Available For Hire`) : console.log("Wrong Details Entry");
    }
    else {
        console.log("Wrong number of details");
    }
}
showDetails("Nabil", 21, true);//Hello Nabil, Your Age Is 21, You Are Available For Hire
showDetails(21, "Nabil", true);//Hello Nabil, Your Age Is 21, You Are Available For Hire
showDetails(true, 21, "Nabil");//Hello Nabil, Your Age Is 21, You Are Available For Hire
showDetails(false, "Nabil", 21);//Hello Nabil, Your Age Is 21, You Are Not Available For Hire
showDetails(false, "Nabil");//Wrong number of details
showDetails(false, "Nabil", "Nasr");//Wrong Details Entry
//=============================================

//A005
function createSelectBox(startYear, endYear) {
    //we putted title to avoid the warning in developer tools
    document.write(`<select title="selectBox">`);
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`);
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);
//=============================================

//A006
function multiply(...multiples) {
    let num = 1;
    for (let i = 0; i < multiples.length; i++) {
        if (!isNaN(multiples[i])) {
            num *= multiples[i].toPrecision(1);
        }
    }
    console.log(num);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
//=============================================


