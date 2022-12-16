//A001
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        return `${zName.split(" ")[0]} ${zName
            .split(" ")[1][0]
            .toUpperCase()}.`;
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        return `Your Age Is ${parseFloat(zAge)}`;
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return `You Live In ${zCountry.substring(0, 2).toUpperCase()}`;
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(
            zAge
        )}, ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
//=========================================================

//A002
function itsMe() {
    return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function

//after converting to arrow function
let itsMeConverted = () => `Iam An Arrow Function`;
console.log(itsMeConverted()); // Iam An Arrow Function

function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//after converting to arrow function
let urlCreateConverted = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreateConverted("https", "elzero", "org")); // https://www.elzero.org
//=============================================================

//A003
//Currying Function Technique
function checker(zName) {
    return function (status) {
        return function (salary) {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
}
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//after converting to arrow function
let checkerConverted = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checkerConverted("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checkerConverted("Ahmed")("Not Available")()); // Iam Not Avaialble
//=============================================================

//A004
//a good solution 
// function specialMix(...data) {
//     let sum = 0;
//     let strings = 0;
//     for (let item of data) {
//         if (isNaN(parseFloat(item))) 
//             strings++;
//         else 
//             sum += parseFloat(item);
//     }
//     if (strings === data.length)
//         return "All Is Strings";
//     return sum;
// }

//a better solution in a lot of sides
function specialMix(...data) {
    let sum = null;
    for (let item of data) {
        if (isNaN(parseFloat(item))) 
            continue;
        sum += parseFloat(item);
    }
    return sum ?? "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "-.4Cool")); // 9.6
console.log(specialMix("5Testing", "Testing", "0.1Cool")); // 5.1
console.log(specialMix("Testing", "Testing", "-.0Cool")); // 0
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
//=============================================================
