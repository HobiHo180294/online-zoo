import "@donate/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const footerLinks = document.querySelectorAll(".menu-footer__link");
  [].forEach.call(footerLinks, (link) => {
    if (link.classList.contains("_active-link")) {
      link.classList.remove("_active-link");
    }
  });
});
