let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution =myString.split(",").filter(char=>isNaN(char)).map(char=>char[0]).reduce((acc,current)=>current==="_"?acc+" ":acc+current).slice(0,-1) ;

console.log(solution);//Elzero Web School