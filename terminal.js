const fetchTerminal = function () {
  fetch("http://85.214.45.48:8080/terminal.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);

      const terminalTag = document.querySelector(".terminal");
      terminalTag.innerHTML = data;
    });
};

fetchTerminal();

setInterval(() => {
  fetchTerminal();
}, 1000);
