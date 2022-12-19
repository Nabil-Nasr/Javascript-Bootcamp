let fonts = document.createElement(`link`);
fonts.rel = "stylesheet";
fonts.href = "https://fonts.googleapis.com/css?family=Open+Sans|Cairo|Roboto";
document.head.append(fonts);

let fontsBox = document.createElement(`select`);
let fontsArray = ["Open Sans", "Cairo", "Roboto"];
for (let font of fontsArray) {
    let option = document.createElement(`option`);
    option.value = font;
    option.innerText = font.split(" ")[0];
    fontsBox.appendChild(option);
}
document.write("font-family: ");
document.body.appendChild(fontsBox);
document.write("<br><br>");

let colorsBox = document.createElement(`select`);
let colorsArray = ["black", "red", "green", "blue", "magenta", "aqua"];
for (let color of colorsArray) {
    let option = document.createElement(`option`);
    option.value = color;
    option.innerText = color;
    colorsBox.appendChild(option);
}
document.write("color: ");
document.body.appendChild(colorsBox);
document.write("<br><br>");

let fontSizesBox = document.createElement(`select`);
for (let i = 16; i <= 30; i++) {
    let option = document.createElement(`option`);
    option.value = `${i}px`;
    option.innerText = `${i}px`;
    fontSizesBox.appendChild(option);
}
document.write("font-size: ");
document.body.appendChild(fontSizesBox);
document.write("<br><br>");

//getting style values from localStorage
if (localStorage.fontFamily) {
    fontsBox.value = localStorage.fontFamily;
}
if (localStorage.color) {
    colorsBox.value = localStorage.color;
}
if (localStorage.fontSize) {
    fontSizesBox.value = localStorage.fontSize;
}

let pageText = document.createElement(`div`);
pageText.innerHTML = `
<h1>The heading of the page</h1>
<h2>Page second heading</h2>
<p>Paragraph test</p>
`;
pageText.style.cssText = `
font-family:${fontsBox.value};
color:${colorsBox.value};
font-size:${fontSizesBox.value}`;
document.body.appendChild(pageText);

fontsBox.addEventListener("change", function () {
    pageText.style.fontFamily = this.value;
    localStorage.setItem("fontFamily", this.value);
});

colorsBox.addEventListener("change", function () {
    pageText.style.color = this.value;
    localStorage.setItem("color", this.value);
});

fontSizesBox.addEventListener("change", function () {
    pageText.style.fontSize = this.value;
    localStorage.setItem("fontSize", this.value);
});

