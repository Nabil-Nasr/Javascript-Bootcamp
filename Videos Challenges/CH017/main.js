let titleContent="Elzero",descriptionContent="Elzero web school",dateContent="25/10"; 


let card=`
<div class="card">
    <h3>Hello ${titleContent}</h3>
    <p>${descriptionContent}</p>
    <span>${dateContent}</span>
</div>
`
document.write(card.repeat(4));

