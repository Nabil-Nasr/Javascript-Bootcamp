let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// 1 
my = my.slice(zero, ++counter).reverse();
console.log(my);// [ 'Osama', 'Elham', 'Mazero', 'Ahmed' ]

// 2
console.log(my.slice(++zero, --counter));//['Elham', 'Mazero']

//  3
console.log(my.slice(zero, counter)[--counter - ++zero].substring(counter - zero, counter) + my[counter].slice(counter));//"Elzero"

//  4
console.log(my[counter].slice(counter + zero)[counter - zero] + my[counter].slice(counter + zero)[++counter - zero].toUpperCase());// "rO";

