let form = document.createElement(`form`);

let firstNameTextNode = document.createTextNode(`firstName: `);
form.appendChild(firstNameTextNode);
let firstNameInput = document.createElement(`input`);
firstNameInput.type = "text";
firstNameInput.placeholder = "Enter your firstName";
form.appendChild(firstNameInput);

let br = document.createElement(`br`);
form.appendChild(br.cloneNode());
form.appendChild(br.cloneNode());

let lastNameTextNode = document.createTextNode(`lastName: `);
form.appendChild(lastNameTextNode);
let lastNameInput = document.createElement(`input`);
lastNameInput.type = "text";
lastNameInput.placeholder = "Enter your lastName";
form.appendChild(lastNameInput);

form.appendChild(br.cloneNode());
form.appendChild(br.cloneNode());

let ageTextNode = document.createTextNode(`age: `);
form.appendChild(ageTextNode);
let ageInput = document.createElement(`input`);
ageInput.type = "number";
ageInput.placeholder = "Enter your age";
form.appendChild(ageInput);

form.appendChild(br.cloneNode());
form.appendChild(br.cloneNode());

let clothesSizeTextNode = document.createTextNode(`clothesSize: `);
form.appendChild(clothesSizeTextNode);
let clothesSizeBox = document.createElement(`select`);
let clothesSizesArray = ["x-sm", "sm", "md", "lg", "x-lg"];
for (let size of clothesSizesArray) {
	let option = document.createElement(`option`);
	option.value = size;
	option.append(size);
	clothesSizeBox.appendChild(option);
}
form.appendChild(clothesSizeBox);

document.body.appendChild(form);

//checking sessionStorage
if(sessionStorage.firstName){
    firstNameInput.value=sessionStorage.firstName;
}
if(sessionStorage.lastName){
    lastNameInput.value=sessionStorage.lastName;
}
if(sessionStorage.age){
    ageInput.value=sessionStorage.age;
}
if(sessionStorage.clothesSize){
    clothesSizeBox.value=sessionStorage.clothesSize;
}

//Saving the changes of the form in localStorage

firstNameInput.addEventListener("input", function(){
    sessionStorage.setItem("firstName",this.value)
})

lastNameInput.addEventListener("input", function(){
    sessionStorage.setItem("lastName",this.value)
})

ageInput.addEventListener("input", function(){
    sessionStorage.setItem("age",this.value)
})

clothesSizeBox.addEventListener("change", function(){
    sessionStorage.setItem("clothesSize",this.value)
})