//A004
let targetElement = document.querySelector(`div`).lastChild;
console.log(targetElement);
//=======================================================

//A005
for (let child of document.body.children) {
    child.addEventListener(`click`, function () {
        console.log(`This Is ${this.nodeName}`);
	});
}
//=======================================================
