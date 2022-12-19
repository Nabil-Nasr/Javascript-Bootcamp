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
