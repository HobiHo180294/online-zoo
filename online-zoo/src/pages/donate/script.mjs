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

  removeActiveLink(footerLinks);
  removeActiveLink(headerLinks);
  inputNumbersLimit(inputNumbers);

  addActiveLink(headerLinks);
});
