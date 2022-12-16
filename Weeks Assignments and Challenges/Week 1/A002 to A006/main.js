//A002

let h1 = document.createElement("h1");
h1.style.color = "blue";
h1.style.fontSize = "80px";
h1.style.fontWeight = "bold";
h1.style.textAlign = "center";
h1.style.fontFamily = "Arial";
h1.append("Elzero");
document.body.appendChild(h1);
//=============================================================


//A003
console.log(
    "%cElzero %cWeb %cSchool",
    "color:red;font-size:40px;",
    "color:green;font-size:40px;font-weight:bold;",
    "background-color:blue;font-size:40px;color:white;"
);
//=============================================================


//A004
// console.groupCollapsed("Group 1");// this logs the group and it's closed

console.group("Group 1");
/**/ console.log("Message One");
/**/ console.log("Message Two");
/**/ console.group("Child Group");
/**/ /**/ console.log("Message One");
/**/ /**/ console.log("Message Two");
/**/ /**/ console.group("Grand Child Group");
/**/ /**/ /**/ console.log("Message One");
/**/ /**/ /**/ console.log("Message Two");
/**/ /**/ console.groupEnd();
/**/ console.groupEnd();
console.groupEnd();
console.group("Group 2");
/**/ console.log("Message One");
/**/ console.log("Message Two");
console.groupEnd();
//=============================================================

//A005

//the right solution by the array
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// console.table({//another solution by the object
// 	0: "Elzero",
// 	1: "Ahmed",
// 	2: "Sameh",
// 	3: "Gamal",
// 	4: "Aya",
// });
//=============================================================

//A006

//first way
//console.log("Iam In Console");
// document.write("Iam In Page");

//second way
/*console.log("Iam In Console");
document.write("Iam In Page");*/
//=============================================================

