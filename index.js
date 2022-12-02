// Initialisation of counter
var numberOfClicks = 0;

//adding clicks to counter
function counter() {
  numberOfClicks = numberOfClicks+1
  document.getElementById('clickCount').innerHTML = numberOfClicks;
}