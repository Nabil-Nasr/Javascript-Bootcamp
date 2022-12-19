//A002 
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
myRequest.onreadystatechange = function () {
	if (this.readyState === 4 && this.status === 200) {
		console.log(myRequest.responseText);
		console.log("Data Loaded");
	}
};
//======================================================

//A003
myRequest.onload = function () {
	if (this.readyState === 4 && this.status === 200) {
		let mainData = JSON.parse(myRequest.responseText);
		for (let i = 0; i < mainData.length; i++) {
            mainData[i].type = "All";
		}
		console.log(mainData);
		let updatedData = JSON.stringify(mainData);
		console.log(updatedData);
		//======================================================
        
		//A004
        mainData = JSON.parse(myRequest.responseText);
        let data=document.createElement(`div`);
        data.id="data";
        for(let i=0;i<mainData.length;i++){
            let div=document.createElement(`div`);

            let h2=document.createElement(`h2`)
            h2.innerText=mainData[i].title;
            div.appendChild(h2);

            let p1=document.createElement(`p`);
            p1.innerText=mainData[i].contents.join(" | ");
            div.appendChild(p1);
            
            let p2=document.createElement(`p`);
            p2.innerText=`Author: ${mainData[i].writer}`
            div.appendChild(p2);
            
            let p3=document.createElement(`p`);
            p3.innerText=`Category: ${mainData[i].type}`
            div.appendChild(p3);
            
            data.appendChild(div);
            
        }
        document.body.appendChild(data);
        
	}
};
//======================================================

