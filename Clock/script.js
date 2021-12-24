
//Creates a clock element. Updates every second
function myTimer() {
    const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
  }

setInterval(myTimer, 1000);