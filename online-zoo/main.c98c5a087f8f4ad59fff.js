"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{8915:()=>{eval('\nvar petImageWrapper = document.querySelectorAll(".card-pets__img");\nvar petDescription = document.querySelectorAll(".desc-pets");\nvar petsImages = document.querySelectorAll(".card-pets__img_pic");\nvar petsCardsContainer = document.querySelector(".pets__cards");\nvar topCharityCovidParagraph = document.querySelector(".top-charity__covid");\npetImageWrapper.forEach(function (element) {\n  return element.addEventListener("mouseover", function (e) {\n    element.nextElementSibling.classList.add("_active");\n  });\n});\nvar mediaQuery1000 = window.matchMedia("(max-width: 1000px)");\n\nif (mediaQuery1000.matches) {\n  var testimonialItem = document.querySelector(".item-testimonial__content");\n  var testimonialPeopleNames = document.querySelectorAll(".header-testimonial__name");\n  var testimonialsAvatars = document.querySelectorAll(".header-testimonial__avatar_pic");\n  var testimonialsContent = document.querySelectorAll(".item-testimonial__content");\n  var backstageSection = document.querySelector(".backstage");\n  var backstageTop = backstageSection.offsetTop;\n  var backstageBottom = backstageSection.offsetBottom;\n  petsCardsContainer.classList.remove("_m-container");\n  topCharityCovidParagraph.innerHTML = "During a time when the COVID-19 epidemic is touching all of our lives, we’re proud and glad that people around <br /> the world find joy in PetStory.";\n  testimonialItem.textContent += "animals.";\n  testimonialPeopleNames.forEach(function (name, index) {\n    if (index === 1) name.textContent = "Oska Samborska";\n  });\n  testimonialsAvatars.forEach(function (avatar, index) {\n    if (index === 1) avatar.setAttribute("src", "./assets/images/main/avatars/Mila-Riksha_avatar.svg");\n  });\n  testimonialsContent.forEach(function (content, index) {\n    if (index === 0) content.innerHTML = "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.";\n    if (index === 1) content.innerHTML = "&nbsp;Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br /> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill<br/>a love for animals.";\n    if (index === 2) content.innerHTML = "&nbsp;My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.";\n  });\n  window.addEventListener("scroll", function () {\n    if (window.scrollY >= backstageTop) backstageSection.style.setProperty("--rightPositionOfBeforeElement", "-204px");else if (window.scrollY >= backstageBottom || window.scrollY <= backstageTop) backstageSection.style.setProperty("--rightPositionOfBeforeElement", "0px");\n  });\n}\n\n//# sourceURL=webpack:///./pages/main/script.mjs?')}},e=>{var t=t=>e(e.s=t);e.O(0,[202],(()=>(t(1202),t(8915))));e.O()}]);