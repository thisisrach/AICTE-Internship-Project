let hours = 0;
let minutes = 0;
let seconds = 0;

function time() {
  setInterval(function () {
    if (seconds < 59) {
      seconds++;
      document.getElementById("timer").textContent =
        hours + ":" + minutes + ":" + seconds;
    } else if (minutes < 59) {
      seconds = 0;
      minutes++;
      document.getElementById("timer").textContent =
        hours + ":" + minutes + ":" + seconds;
    } else {
      hours++;
      document.getElementById("timer").textContent =
        hours + ":" + minutes + ":" + seconds;
    }
  }, 1000);
}

document.getElementById("button").addEventListener("click", time());