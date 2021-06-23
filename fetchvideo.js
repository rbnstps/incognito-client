"use strict";

const dataFetch = async function () {
  const response = await fetch("http://85.214.45.48:8080/videos");
  const data = await response.json();

  return data;
};

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  console.log(grid);

  //   DIT BINNEN EEN FUNCTIE

  dataFetch().then((videos) => {
    // images = data van de server

    var firstTime = true;

    videos.forEach((video) => {
      // voor elke afbeelding binnen de afbeelding lijst: maak figure(element) aan

      if (firstTime == true) {
        const figure = document.createElement("figure");
        figure.classList = "gallery";
        figure.classList = "image";
        const videoTag = document.createElement("video");

        videoTag.setAttribute("mute", "mute");

        videoTag.setAttribute("autoplay", "autoplay"); // this will set the attribute but will not play
        videoTag.setAttribute("loop", "loop"); // this will set the attribute but will not play
        const sourceTag = document.createElement("source");

        sourceTag.src = video.url;

        figure.appendChild(videoTag);
        videoTag.appendChild(sourceTag);

        grid.appendChild(figure);
        // div.classList.add("gallery__img");
        firstTime = false;
      }
    });
  });
});
