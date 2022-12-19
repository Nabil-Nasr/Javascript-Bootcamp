//A001
let myPromise1 = new Promise((resolve, reject) => {
	let XHR = new XMLHttpRequest();
	XHR.open("GET", "articles.json");
	XHR.send();
	XHR.onload = function () {
		if (this.status === 200 && this.readyState === this.DONE) {
			let dataArrObj = JSON.parse(this.responseText);
			resolve(dataArrObj);
		}
	}; 
}).then((resolvedValue) => {
	resolvedValue.length = 5;
	for (let article of resolvedValue) {
		let div = document.createElement(`div`);

		let h3 = document.createElement(`h3`);
		h3.innerText = article.title;

		let p = document.createElement(`p`);
		p.innerText = article.description;

		div.append(h3, p);
		document.body.appendChild(div);
	}
});
//========================================================

//A002
fetch("articles.json")
	.then((response) => response.json())
	.then((resolvedValue) => {
		resolvedValue.length = 5;
		for (let article of resolvedValue) {
			let div = document.createElement(`div`);

			let h3 = document.createElement(`h3`);
			h3.innerText = article.title;

			let p = document.createElement(`p`);
			p.innerText = article.description;

			div.append(h3, p);
			document.body.appendChild(div);
		}
	}).finally(
		()=>{
			let div = document.createElement(`div`);

			let h2 = document.createElement(`h2`);
			h2.innerText="I can't believe that this the last assignment in the course (الحمد لله)"
			h2.style.color="tomato";
			div.append(h2);
			document.body.appendChild(div);
		}
	);
//========================================================
