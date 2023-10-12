const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";

function pintar(pinto) {
  if (ele.style.backgroundColor === "green") {
    ele.style.backgroundColor = pinto;
  } else {
    ele.style.backgroundColor = "green";
  }
}