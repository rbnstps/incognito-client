"use strict";

const dataFetch = async function () {
  const response = await fetch("http://85.214.45.48:8080/dataset");
  const data = await response.json();

  return data;
};

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");

  //   DIT BINNEN EEN FUNCTIE

  dataFetch().then((images) => {
    // images = data van de server

    var firstTime = true;

    images.forEach((image) => {
      // voor elke afbeelding binnen de afbeelding lijst: maak figure(element) aan

      if (firstTime == true) {
        const figure = document.createElement("figure");
        figure.classList = "gallery";
        figure.classList = "image";
        const imageElement = document.createElement("img");

        imageElement.src = image.url;

        figure.appendChild(imageElement);
        grid.appendChild(figure);
        // div.classList.add("gallery__img");
        firstTime = false;
      }
    });
  });
});
