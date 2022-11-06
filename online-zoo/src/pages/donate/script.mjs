import "@donate/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const footerLinks = document.querySelectorAll(".menu-footer__link");
  [].forEach.call(footerLinks, (link) => {
    if (link.classList.contains("_active-link")) {
      link.classList.remove("_active-link");
    }
  });
});

function ibg() {
  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
