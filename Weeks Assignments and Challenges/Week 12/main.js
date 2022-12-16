//A001
console.log(1, elzero);
console.log(2, document.querySelector("#elzero"));
console.log(3, document.querySelector(".element"));
console.log(4, document.querySelector("[name='js']"));
console.log(5, document.querySelector("div"));
console.log(6, document.querySelectorAll("#elzero")[0]);
console.log(7, document.querySelectorAll(".element")[0]);
console.log(8, document.querySelectorAll("[name='js']")[0]);
console.log(9, document.querySelectorAll("div")[0]);
console.log(10, document.getElementById("elzero"));
console.log(11, document.getElementsByClassName("element")[0]);
console.log(12, document.getElementsByName("js")[0]);
console.log(13, document.getElementsByTagName("div")[0]);
console.log(14, document.body.firstElementChild);
console.log(15, document.body.children[0]);
console.log(16, document.body.childNodes[3]);
console.log(17, document.body.firstChild.nextElementSibling);
//===================================================================

//A002
for (let child of a2Images.children) {

    child.firstElementChild.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    child.firstElementChild.alt = "Elzero Logo";
}
//===================================================================

//A003
document.querySelector("[placeholder='USD Dollar']").addEventListener("input", function () {
    document.querySelector(".result").innerHTML = `{${+this.value}} USD Dollar = {${(this.value * 15.6).toFixed(2)}} Egyptian Pound`;
});
//===================================================================

//A004
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let temp;
//swapping title
temp = one.title;
one.title = two.title;
two.title = temp;
//swapping innerHTML
temp = one.innerHTML;
one.innerHTML = two.innerHTML;
two.innerHTML = `${temp} 2`;
//===================================================================

//A005
for (let image of a5Images.children) {
    if (image.alt) {
        image.alt = "Old";
    } else {
        image.alt = "Elzero New";
    }
}
//===================================================================

//A006
document.querySelector("[name='create']").addEventListener("click", function (eve) {
    eve.preventDefault();
    let elementsNumber = document.querySelector(`[name="elements"]`);
    let results = document.querySelector(`.results`);
    results.innerHTML = "";
    
    if (elementsNumber.value > 0) {
        let elementText = document.querySelector(`[name="texts"]`).value;
        let elementType = document.querySelector(`[name="type"]`).value;
        for (let i = 1; i <= elementsNumber.value; i++) {
            let element = document.createElement(elementType);
            element.classList.add("box");
            element.title = "Element";
            element.id = `id-${i}`;
            element.innerHTML = elementText;
            results.appendChild(element);
        }
    }
})
//===================================================================






