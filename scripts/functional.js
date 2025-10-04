"use strict";

const hambugMenuContents = document.querySelector(".menu-extension");
const hambugMenuIcon = document.querySelector(".hamburger-menu-container");
const menuCancel = document.querySelector(".menu-cancel");
const mainCancelMenu = document.querySelector("main");
const projectTitle = document.querySelector(".project-title");
const projectText = document.querySelector(".project-text");
const projectBox = document.querySelectorAll(".each");
const projectBoxZero = document.querySelector(".one");
const projectBoxOne = document.querySelector(".two");
const projectBoxTwo = document.querySelector(".three");

const openMenu = function () {
  hambugMenuContents.classList.remove("hide");
};

const closeMenu = function () {
  hambugMenuContents.classList.add("hide");
};

for (let i = 0; i < projectBox.length; i++) {
  const projectCardToogle = function () {
    if (projectBox[i] === projectBoxOne) {
      projectBox[i].classList.add("switch");
      projectBoxOne.style.transform = "scale(1.05)";
      projectBoxZero.classList.remove("switch");
      projectBoxTwo.classList.remove("switch");
    }
    if (projectBox[i] === projectBoxZero) {
      projectBox[i].classList.add("switch");
      projectBoxOne.classList.remove("switch");
      projectBoxOne.style.transform = "scale(1.0)";
      projectBoxTwo.classList.remove("switch");
    }
    if (projectBox[i] === projectBoxTwo) {
      projectBox[i].classList.add("switch");
      projectBoxZero.classList.remove("switch");
      projectBoxOne.style.transform = "scale(1.0)";
      projectBoxOne.classList.remove("switch");
    }
  };

  projectBox[i].addEventListener("click", projectCardToogle);
}

hambugMenuIcon.addEventListener("click", openMenu);
menuCancel.addEventListener("click", closeMenu);
mainCancelMenu.addEventListener("click", closeMenu);
