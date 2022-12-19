"use strict"; 
let mainJs = document.querySelector("[src='main.js']");

document.body.style.cssText = `
	margin:0px;
	background-color:#ececec;
	font-family:Tahoma,Arial;`;

//=========== header
let header = document.createElement("header");
header.className = "website-head";
header.style = `
	display:flex;
	padding:20px;
	background-color:white;
	justify-content:space-between;
	align-items:center;
	box-shadow:0 -40px 50px black`;

//  logo
let logo = document.createElement("a");
logo.append("Elzero");
logo.className = "logo";
logo.title = "Website Logo";
logo.href="index.html"
logo.style = `
	font-weight:bold;
	color:rgb(35,169,110);
	font-size:26px;
	text-decoration:none;`;
header.appendChild(logo);
// end logo

//========  ul
let menu = document.createElement("ul");
menu.className = "menu";
menu.style = `
	padding:0;
	margin:0;
	display:flex;
	list-style:none;
	gap:10px;`;

let lis = [];
for (let i = 0; i < 4; i++) {
	lis[i] = document.createElement("li");

	let link=document.createElement("a");
	link.href="#";
	link.style=`
		text-decoration:none;
		color:#888;`

	lis[i].appendChild(link);
	menu.appendChild(lis[i]);
}
lis[0].firstChild.appendChild(document.createTextNode("Home"));
lis[1].firstChild.appendChild(document.createTextNode("About"));
lis[2].firstChild.appendChild(document.createTextNode("Service"));
lis[3].firstChild.appendChild(document.createTextNode("Contact"));

header.appendChild(menu);
//================= end ul
mainJs.before(header);
//================= end header

//=========== between header and footer

let midDiv = document.createElement("div");
midDiv.className = "content";
midDiv.style.cssText = `
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	padding:20px;
	gap:20px;
	min-height:calc(100vh - 142px);
	box-sizing:border-box;`;

for (let i = 1; i <= 15; i++) {
	let product = document.createElement("div");
	product.className = "product";
	// there is a mobile media query in embedded style in the html file
	product.style.cssText =`
		padding:20px;
		background-color:white;
		border:1px solid #ddd;
		box-sizing:border-box;
		text-align:center;
		color:#888;
		border-radius:6px;
		display: grid;
		align-content:center;`;

		// simulation for media query by javascript
		// ======================= start simulation part 1
		if(innerWidth<768)
			product.style.width=`calc((100% - 40px) / 2)`;
		else 
			product.style.width=`calc((100% - 40px) / 3)`;
		// ======================= end simulation part 1


	let span = document.createElement("span");
	span.style.cssText =`
		font-size:40px;
		color:black;
		margin-block:10px;`;
	span.appendChild(document.createTextNode(i));
	product.appendChild(span);
	product.appendChild(document.createTextNode("Product"));
	midDiv.appendChild(product);
}
// simulation for media query by javascript
// ======================= start simulation part 2
onresize=function (){
	if(innerWidth<768)
		document.querySelectorAll(".product").forEach((element)=>{
			element.style.width=`calc((100% - 40px) / 2)`;
		})
	else 
		document.querySelectorAll(".product").forEach((element)=>{
			element.style.width=`calc((100% - 40px) / 3)`;
		})
}
// ======================= end simulation part 2

mainJs.before(midDiv);

//============== end midDiv

//============= footer
let footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText = `
	background-color:rgb(35,169,110);
	font-size:26px;
	text-align:center;
	padding:20px;
	color:white;`;
footer.append("Copyright 2022");
mainJs.before(footer);

//============== end footer
