fetch("http://85.214.45.48:8080/timer.txt")
  .then((response) => response.text())
  .then((timer) => {
    var urentimer = Math.floor(timer / 60);
    var minutentimer = timer % 60;

    const uurTag = document.querySelector(".uur");
    uurTag.innerHTML = urentimer;

    const minuutTag = document.querySelector(".minuut");
    minuutTag.innerHTML = minutentimer;
  });
