var colorGlobal = "white";

const generarCuadrado = (colorito) => {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.border = "solid 2px black";
  nuevoDiv.style.backgroundColor = colorito;

  const cuerpo = document.querySelector("body");
  cuerpo.appendChild(nuevoDiv);
};

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorGlobal = "pink";
  } else if (event.key === "s") {
    colorGlobal = "orange";
  } else if (event.key === "d") {
    colorGlobal = "lightblue";
  } else if (event.key === "q") {
    generarCuadrado("purple");
  } else if (event.key === "w") {
    generarCuadrado("gray");
  } else if (event.key === "e") {
    generarCuadrado("brown");
  }
  const cajita = document.getElementById("key");
  cajita.style.backgroundColor = colorGlobal;
});
