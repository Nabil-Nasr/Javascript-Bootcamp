let addClasses = document.querySelector(".classes-to-add");
let removeClasses = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(`[title="Current"]`);
let classesDiv = document.querySelector(".classes-list div");

for (let cla of currentElement.classList.value.split(" ").sort()) {
        let spanClass = document.createElement("span");
        spanClass.classList.add(cla);
        spanClass.innerHTML = cla;
        classesDiv.appendChild(spanClass);
}

addClasses.addEventListener("blur", function () {
    if (this.value) {
        let classes = this.value.toLowerCase().split(" ").concat(currentElement.classList.value.split(" ")).sort();
        classesDiv.innerHTML="";
        for (let cla of classes) {
            if (cla !== "" && cla[0]!=="."&&isNaN(parseFloat(cla))&&!document.querySelector(`.classes-list .${cla}`)) {
                currentElement.classList.add(cla);
                let spanClass = document.createElement("span");
                spanClass.classList.add(cla);
                spanClass.innerHTML = cla;
                classesDiv.appendChild(spanClass);
            }
        }
        this.value = "";
    }
});
    
removeClasses.addEventListener("blur", function () {
    if (this.value) {
        let classes = this.value.toLowerCase().split(" ");
        for (let cla of classes) {
            if (cla !== "" && currentElement.classList.contains(cla)) {
                currentElement.classList.remove(cla);
                classesDiv.removeChild(document.querySelector(`.classes-list .${cla}`));
            }
        }
        this.value = "";
        if(!classesDiv.innerHTML){
            classesDiv.innerHTML="No Classes To Show";
        }
    }
});
