//Plus And Minus Puzzle
let a=10; 
let b="20";
let c=80;

console.log(++a + +b++ + +c++ - +a++);//11+20+80-11=100
console.log(typeof b,b);//b converted to a number 21
console.log(++a + -b + +c++ - -a++ + +a);//13-21+81+13+14=100

//81+21+13*21-22*13+12-1=100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
//=================================================================

//Play With Variable Values
let d="-100";
let e="20";
let f=30;
let g=true;

//-20*-100
console.log(-e-- * d-- );//2000

//102+20*2+31
console.log(- --d + ++e * ++g + ++f );//173
//=================================================================