let ourElement = document.querySelector(`.our-element`);
ourElement.nextElementSibling.remove();

let start = document.createElement(`div`);
start.classList.add(`start`)
start.title = `Start Element`;
start.setAttribute(`data-value`, `Start`); 
start.innerHTML = `Start`;
ourElement.before(start);

let end = document.createElement(`div`);
end.classList.add(`end`)
end.title = `End Element`;
end.setAttribute(`data-value`, `End`);
end.innerHTML = `End`;
ourElement.after(end);

