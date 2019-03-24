var odiv=document.createElement("div"); //creates the overlay div (odiv)
odiv.className = "chrr-blssm-ext-ol";
document.body.appendChild(odiv); 
odiv.innerText="test123";
console.log("ol runs");

var close=document.createElement("div");
close.className ="chrr-blssm-close-bt";
close.innerText="X";
close.style.cursor - 'pointer';
close.onclick = function() {
	odiv.style.display = "none";
};
odiv.appendChild(close);