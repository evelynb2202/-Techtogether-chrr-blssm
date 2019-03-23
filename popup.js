document.getElementById('question').onclick = function() {
  getQuestions();
};

function getQuestions() {
  document.getElementById('question').innerHTML = 'How do you feel today?';
}

document.getElementById('nope').onclick = function() {
  setReminder();
};

function setReminder() {
.setInterval(3000);
  console.log('time to answer');
}
