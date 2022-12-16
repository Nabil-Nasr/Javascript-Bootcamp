let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//  1
//smallest returned integer
console.log(Math.round(Math.min(a, b, c, d)));

// 2
//using a and b only one time for everyone
console.log(Math.pow(a, Math.trunc(d)));//10000

//  3
//get int "2" from d
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(parseInt(d));
console.log(+d.toFixed());

//  4
//using b and d only one time for everyone
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));//66.67 =>String
console.log(Math.round(Math.floor(b) / Math.ceil(d)));//67 =>Number