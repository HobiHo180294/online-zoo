import "@donate/style.scss";
import {
  ibg,
  addActiveLink,
  removeActiveLink,
  inputNumbersLimit,
} from "@js-modules/_functions.mjs";

document.addEventListener("DOMContentLoaded", () => {
  ibg();

  const footerLinks = document.querySelectorAll(".menu-footer__link");
  const headerLinks = document.querySelectorAll(".menu-header__link");
  const inputNumbers = document.querySelectorAll("input[type=number]");
  const measureDots = document.querySelectorAll(".measure__dot");
  const moneySums = document.querySelectorAll(".money__sum");

  measureDots.forEach((dot, index) => {
    dot.addEventListener("mouseover", () => {
      moneySums.forEach((sum, sumIndex) => {
        if (index === sumIndex) sum.classList.add("_active-sum");
      });
    });

    dot.addEventListener("mouseout", () => {
      moneySums.forEach((sum, sumIndex) => {
        if (index === sumIndex) sum.classList.remove("_active-sum");
      });
    });
  });

  removeActiveLink(footerLinks);
  removeActiveLink(headerLinks);
  inputNumbersLimit(inputNumbers);

  addActiveLink(headerLinks);
});
