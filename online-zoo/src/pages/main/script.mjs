import "@main/style.scss";

const petImageWrapper = document.querySelectorAll(".card-pets__img");
const petDescription = document.querySelectorAll(".desc-pets");

petImageWrapper.forEach((element) =>
  element.addEventListener("mouseover", (e) => {
    element.nextElementSibling.classList.add("_active");
  })
);

// petImage.addEventListener("mouseover", (e) => {
// });
