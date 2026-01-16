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
    "Images/weddings/wedding1.webp",
    "Images/weddings/wedding2.webp",
    "Images/weddings/wedding3.webp",
    "Images/weddings/wedding4.webp",
    "Images/weddings/wedding5.webp",
    "Images/weddings/wedding6.webp"
  );

document.getElementById("tab2").onclick = () =>
  setImages(
    "Images/birthdays/birthday1.webp",
    "Images/birthdays/birthday2.webp",
    "Images/birthdays/birthday3.webp",
    "Images/birthdays/birthday4.webp",
    "Images/birthdays/birthday5.webp",
    "Images/birthdays/birthday6.webp"
  );

document.getElementById("tab3").onclick = () =>
  setImages(
    "Images/seasonal/seasonal1.webp",
    "Images/seasonal/seasonal2.webp",
    "Images/seasonal/seasonal3.webp",
    "Images/seasonal/seasonal4.webp",
    "Images/seasonal/seasonal5.webp",
    "Images/seasonal/seasonal6.webp"
  );

document.getElementById("tab4").onclick = () =>
  setImages(
    "Images/babies/babies1.webp",
    "Images/babies/babies2.webp",
    "Images/babies/babies3.webp",
    "Images/babies/babies4.webp",
    "Images/babies/babies5.webp",
    "Images/babies/babies6.webp"
  );
