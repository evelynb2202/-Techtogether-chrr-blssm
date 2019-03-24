
//Main overlay box, set up for question 1
var odiv=document.createElement("div"); //creates the overlay div (odiv)
odiv.className = "chrr-blssm-ext-ol";
document.body.appendChild(odiv); 
odiv.style.backgroundImage = "url(" + chrome.extension.getURL('chr-blssm-q1.png') + ")";

//left answer button set up for question 1
var btL=document.createElement("div");
btL.className = "chr-blssm-bt-left";
btL.style.backgroundImage = "url(" + chrome.extension.getURL('h1.png') + ")";
btL.style.display = "block";
btL.onclick = function() {
	chrome.runtime.sendMessage({answer1: "good"});
	odiv.style.display = "none";
};
odiv.appendChild(btL);

//right answer button set up for question 1
var btR=document.createElement("div");
btR.className = "chr-blssm-bt-right";
btR.style.backgroundImage = "url(" + chrome.extension.getURL('s1.png') + ")";
btR.style.display = "block";
btR.onclick = function() {
	chrome.runtime.sendMessage({answer1: "bad"});
	odiv.style.display = "none";
};
odiv.appendChild(btR);