//challenge 1 
let names = function (...namesArray) {
    return `String [${namesArray.join("], [")}] => Done !`;
};
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

names = (...namesArray) => `String [${namesArray.join("], [")}] => Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));



//challenge 2
let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one+two+nums[0][0];

function calc(one, two, ...nums) {
    return one + two + nums[0][0];
}

console.log(calc(10, myNumbers[1], myNumbers));//80
