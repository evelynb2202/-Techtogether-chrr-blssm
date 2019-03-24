var odiv=document.createElement("div"); //creates the overlay div (odiv)
odiv.className = "chrr-blssm-ext-ol";
document.body.appendChild(odiv); 
console.log("ol runs");

// var close=document.createElement("div");
// close.className ="chrr-blssm-close-bt";
// close.innerText="X";
// close.style.cursor - 'pointer';
// close.onclick = function() {
// 	odiv.style.display = "none";
// };
// odiv.appendChild(close);



odiv.style.backgroundImage = "url(" + chrome.extension.getURL('chr-blssm-q1.png') + ")";

var btL=document.createElement("div");
btL.className = "chr-blssm-bt-left";
btL.style.backgroundImage = "url(" + chrome.extension.getURL('h1.png') + ")";
btL.style.display = "block";
btL.onclick = function() {
	
	odiv.style.display = "none";
};
odiv.appendChild(btL);


var btR=document.createElement("div");
btR.className = "chr-blssm-bt-right";
btR.style.backgroundImage = "url(" + chrome.extension.getURL('s1.png') + ")";
btR.style.display = "block";
btR.onclick = function() {
	
	odiv.style.display = "none";
};
odiv.appendChild(btR);