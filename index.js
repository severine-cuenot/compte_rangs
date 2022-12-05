// Initialisation of counter
let numberOfClicks = 0;

//adding clicks to counter
function counter() {
  numberOfClicks = numberOfClicks+1;
  document.getElementById('clickCount').innerHTML = numberOfClicks;
}

function resetCounter() {
  numberOfClicks = 0;
  document.getElementById('clickCount').innerHTML = numberOfClicks;
}

