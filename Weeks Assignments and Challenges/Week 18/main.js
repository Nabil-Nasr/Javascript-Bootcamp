//A001 
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipReg = /(\w{3,4}:?)+/gi;
console.log(ip.match(ipReg));
//=======================================================

//A002
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesReg = /Os\d*O/g;
console.log(specialNames.match(specialNamesReg));
// Output
// ['Os10O', 'OsO', 'Os100O']
//=======================================================

//A003
let phone = "+(995)-123 (4567)";
let phoneReg = /\+\(\d{3}\)-\d{3} \(\d{4}\)/g;
console.log(phone.match(phoneReg));
//=======================================================

//A004
let re1 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
//that regexp is for url
//https?: choosing the protocol is it secure or not then has :
//\/\/ is escaping for //
//(?:[-\w]+\.)? for the whole block if it's exists get it ?: gets one or more of (word character and - ) if it's exists then has . character
//([-\w]+)\.\w+ then has one or more of (word character and - ) then . character then one or more word character
//(?:\.\w+)? for the whole block if it's exists it matches (. character then one or more word character)if it's not exists the block will not be matched
//\/?.* escaping for / if it's exists then zero or more of any character except the terminators and newline
// i for case insensitive
//=======================================================

//A005
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re2 = /\d{1,2} *[-/]? *\d{2} *[-/]? *\d{2,4}/g;

console.log(date1.match(re2)); // "25/10/1982"
console.log(date2.match(re2)); // "25 - 10 - 1982"
console.log(date3.match(re2)); // "25 10 1982"
console.log(date4.match(re2)); // "25 10 82"
//=======================================================

//A006
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re3 =
	/(https?:\/\/)?(www\.)?[A-z]\w*(\.[A-z]\w*){1,3}(:\d{2,5})?(\/[a-z][\w\.\?\+\=\&\%\-\(\)]*|\/)*/gi;

console.log(url1.match(re3));
console.log(url2.match(re3));
console.log(url3.match(re3));
console.log(url4.match(re3));
console.log(url5.match(re3));
//=======================================================
