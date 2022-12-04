import "@main/style.scss";

const petImageWrapper = document.querySelectorAll(".card-pets__img");
const petDescription = document.querySelectorAll(".desc-pets");

const petsImages = document.querySelectorAll(".card-pets__img_pic");
const petsCardsContainer = document.querySelector(".pets__cards");

const topCharityCovidParagraph = document.querySelector(".top-charity__covid");

petImageWrapper.forEach((element) =>
  element.addEventListener("mouseover", (e) => {
    element.nextElementSibling.classList.add("_active");
  })
);

const mediaQuery1000 = window.matchMedia("(max-width: 1000px)");

if (mediaQuery1000.matches) {
  const testimonialItem = document.querySelector(".item-testimonial__content");
  const testimonialPeopleNames = document.querySelectorAll(
    ".header-testimonial__name"
  );
  const testimonialsAvatars = document.querySelectorAll(
    ".header-testimonial__avatar_pic"
  );
  const testimonialsContent = document.querySelectorAll(
    ".item-testimonial__content"
  );

  const backstageSection = document.querySelector(".backstage");

  const backstageTop = backstageSection.offsetTop;
  const backstageBottom = backstageSection.offsetBottom;

  petsCardsContainer.classList.remove("_m-container");

  topCharityCovidParagraph.innerHTML =
    "During a time when the COVID-19 epidemic is touching all of our lives, we’re proud and glad that people around <br /> the world find joy in PetStory.";

  testimonialItem.textContent += "animals.";
  testimonialPeopleNames.forEach((name, index) => {
    if (index === 1) name.textContent = "Oska Samborska";
  });

  testimonialsAvatars.forEach((avatar, index) => {
    if (index === 1)
      avatar.setAttribute(
        "src",
        "./assets/images/main/avatars/Mila-Riksha_avatar.svg"
      );
  });

  testimonialsContent.forEach((content, index) => {
    if (index === 0)
      content.innerHTML =
        "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.";

    if (index === 1)
      content.innerHTML =
        "&nbsp;Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br /> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill<br/>a love for animals.";

    if (index === 2)
      content.innerHTML =
        "&nbsp;My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.";
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= backstageTop)
      backstageSection.style.setProperty(
        "--rightPositionOfBeforeElement",
        "-204px"
      );
    else if (
      window.scrollY >= backstageBottom ||
      window.scrollY <= backstageTop
    )
      backstageSection.style.setProperty(
        "--rightPositionOfBeforeElement",
        "0px"
      );
  });
}
