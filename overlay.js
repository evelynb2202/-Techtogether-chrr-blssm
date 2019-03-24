//Main overlay box, set up for question 1
var odiv = document.createElement('div'); //creates the overlay div (odiv)
odiv.className = 'chrr-blssm-ext-ol';
document.body.appendChild(odiv);

//If answer the question, close the overlaybox
function close() {
  odiv.style.display = 'none';
}

// let today = new Date();
// document.getElementById('demo').innerHTML = today.getDate();

// if (today) {
//   document.body.appendChild(odiv);
// } else if (!this.btL.onclick || !this.btR.onclick) {
//   setTimeout(close(), 100);
// }

odiv.style.backgroundImage =
  'url(' + chrome.extension.getURL('chr-blssm-q1.png') + ')';

//left answer button set up for question 1
var btL = document.createElement('div');
btL.className = 'chr-blssm-bt-left';
btL.style.backgroundImage = 'url(' + chrome.extension.getURL('happy.png') + ')';
btL.style.display = 'block';
btL.onclick = function() {
  chrome.runtime.sendMessage({ answer1: 'good' });
  odiv.style.display = 'none';
};
odiv.appendChild(btL);

//right answer button set up for question 1
var btR = document.createElement('div');
btR.className = 'chr-blssm-bt-right';
btR.style.backgroundImage = 'url(' + chrome.extension.getURL('woman.png') + ')';
btR.style.display = 'block';
btR.onclick = function() {
  chrome.runtime.sendMessage({ answer1: 'bad' });
  odiv.style.display = 'none';
};
odiv.appendChild(btR);
