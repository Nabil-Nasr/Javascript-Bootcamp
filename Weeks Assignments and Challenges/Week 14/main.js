//A001 
// let interval = prompt("Print Number From - To", "Example: 5-20").split("-");
// for (
// 	let i = Math.min(interval[0], interval[1]);
// 	i <= Math.max(interval[0], interval[1]);
// 	i++
// ) {
// 	let div=document.createElement(`div`);
// 	div.innerText=i;
// 	document.body.append(div);
// }
//=========================================================

//A002
onload = function () {
	setTimeout(function () {
		let div = document.createElement(`div`);
		div.classList.add("pop-up")
		let h2 = document.createElement(`h2`);
		h2.innerText = "Welcome";
		div.appendChild(h2);
		let p = document.createElement(`p`);
		p.innerText = "Welcome To Elzero Web School";
		div.appendChild(p);
		let btn = document.createElement(`button`);
		btn.innerText = "X";
		btn.onclick = function () {
			div.remove();
		};
		div.appendChild(btn);
		document.body.appendChild(div);
	}, 5000);
};
//=========================================================

//A003
let counter3 = document.createElement(`div`);
counter3.innerText = 10;
document.body.appendChild(counter3);
let timer3 = setInterval(function () {
	counter3.innerText -= 1;
	if (counter3.innerText <= 0) {
		clearInterval(timer3);
	}
}, 1000);
//=========================================================

//A004
// let counter4 = document.createElement(`div`);
// counter4.innerText = 10;
// document.body.appendChild(counter4);
// let timer4 = setInterval(function () {
//     counter4.innerText -= 1;
// 	if (counter4.innerText == 5) {
//         clearInterval(timer4);
//         location.href="http://elzero.org"
// 	}
// }, 1000);
//=========================================================

//A005
let counter5 = document.createElement(`div`);
counter5.innerText = 10;
document.body.appendChild(counter5);
let timer5 = setInterval(function () {
    counter5.innerText -= 1;
	if (counter5.innerText == 5) {
        open("http://elzero.org","_blank","width=500,height=500,left=15,top=15")
	}
	if (counter5.innerText == 0) {
        clearInterval(timer5);
	}
}, 1000);
//=========================================================
