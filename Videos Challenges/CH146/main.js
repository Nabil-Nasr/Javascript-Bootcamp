/*
    Regular Expression
    - Challenge
*/

let url1 = 'google.com/search?q=kjh+hkjh&oq=kjh+hkjh&aqs=edge.().69i57j0i13j0i10i13j0i13l3j0i13i30l3.1866j0j1&sourceid=chrome&ie=UTF-8';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org/';
let url5 = `https://www.elzero.org:8080/articles.php?id=100&cat=topics/`;

let re = /(https?:\/\/)?(www\.)?[a-z]\w*\.[a-z]\w*(\.[a-z]\w*)?(:\d{2,4})?(\/[a-z][\w\.\?\+\=\&\%\-\(\)]*|\/)*/ig;

console.log(1, url1.match(re));
console.log(2, url2.match(re));
console.log(3, url3.match(re));
console.log(4, url4.match(re));
console.log(5, url5.match(re));