var tabIMG1 = document.getElementById("tabIMG1");
var tabIMG2 = document.getElementById("tabIMG2");
var tabIMG3 = document.getElementById("tabIMG3");
var tabIMG4 = document.getElementById("tabIMG4");
var tabIMG5 = document.getElementById("tabIMG5");
var tabIMG6 = document.getElementById("tabIMG6");

const tabImgs = [tabIMG1, tabIMG2, tabIMG3, tabIMG4, tabIMG5, tabIMG6];

function setImages(a, b, c, d, e, f) {
  const srcs = [a, b, c, d, e, f];

  tabImgs.forEach((img, i) => {
    img.src = srcs[i];
    img.style.animation = "none";
  });

  setTimeout(() => {
    tabImgs.forEach((img) => {
      img.style.animation = "";
    });
  }, 10);
}

document.getElementById("tab1").onclick = () =>
  setImages(
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png"
  );

document.getElementById("tab2").onclick = () =>
  setImages(
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png"
  );

document.getElementById("tab3").onclick = () =>
  setImages(
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png"
  );

document.getElementById("tab4").onclick = () =>
  setImages(
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png",
    "Images/placeholder.png"
  );
