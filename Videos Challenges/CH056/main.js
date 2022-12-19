
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany","Samia","Anwar"];

let adminsCounter = myAdmins.indexOf("Stop");
adminsCounter = adminsCounter !== -1 ? adminsCounter : myAdmins.length;

document.write(`<div>We Have ${adminsCounter} Admins</div>`);

document.write("<hr>");
for (let i = 0; i < adminsCounter; i++) {
    document.write("<div>");
    document.write(`The Admin for Team ${i + 1} Is ${myAdmins[i]}`);
    document.write("<h3>Team Members: </h3>");
    for (let j = 0, k = 1; j < myEmployees.length; j++) {
        if (myEmployees[j][0] === myAdmins[i][0]) {
            document.write(`<p>- ${k++} ${myEmployees[j]} </p>`);
        }
    }
    document.write("</div>");
    document.write("<hr>");
}

