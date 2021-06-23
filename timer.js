var urentimer = null;
var minutentimer = null;
const fetchTimer = function () {
  fetch("http://85.214.45.48:8080/timer.txt")
    .then((response) => response.text())
    .then((timer) => {
      urentimer = Math.floor(timer / 60);
      minutentimer = timer % 60;

      const uurTag = document.querySelector(".uur");
      uurTag.innerHTML = urentimer;

      const minuutTag = document.querySelector(".minuut");
      minuutTag.innerHTML = minutentimer;
    });
  if (urentimer == 0 && minutentimer == 0) {
    refreshVideo();
  }
};

fetchTimer();

setInterval(() => {
  fetchTimer();
}, 1000);
