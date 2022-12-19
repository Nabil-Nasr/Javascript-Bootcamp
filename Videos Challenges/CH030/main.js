let a = "Elzero Web School";


//  1 
console.log(a.slice(2, 6).replace(a.charAt(2), a.charAt(2).toUpperCase()));

//  2
console.log(a.charAt(a.length - 4).toUpperCase().repeat(8));

//  3
console.log(a.split(" ", 1));

//  4
console.log(`${a.substr(0, 6)} ${a.substr(-6)}`);

//  5
console.log(`${a[0].toLocaleLowerCase()}${a.substr(1, a.length - 2).toUpperCase()}${a[a.length - 1].toLowerCase()}`);