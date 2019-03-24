var odiv = document.createElement('div'); //creates the overlay div (odiv)
odiv.className = 'chrr-blssm-ext-ol';
document.body.appendChild(odiv);
console.log('ol runs');

var close = document.createElement('div');
close.className = 'chrr-blssm-close-bt';
close.innerText = 'X';
//close.style.cursor - 'pointer';
close.onclick = function() {
  odiv.style.display = 'none';
};
odiv.appendChild(close);

//
// var q1url = 'url(' + chrome.extension.getURL('chrr-blssm-q1.png') + ')';
// console.log(q1url);
// odiv.style.backgroundImage = q1url;

var text = document.createElement('h3');
text.className = 'text';
text.innerText = 'Hey! How do you feel today?';

var happiness = 0;
var day = 0;
var happyIndex = (happiness / day) * 100;

var button1 = document.createElement('button');
var button2 = document.createElement('button');
button1.className = 'good';
button2.className = 'bad';
button1.innerText = 'Great!';
button2.innerText = 'Not great!';

//was working on onClick, turns out new version came..
// function info() {}

// if (button1.onclick) {
//   close.onclick = function() {
//     odiv.style.display = 'none';
//   };
// } else if (button2.onclick) {
// }

odiv.appendChild(text);
odiv.appendChild(button1);
odiv.appendChild(button2);
