"use strict"
{
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  const ul = document.querySelector(".contents");
  const contents = ul.children;
  const contentsItems = document.querySelectorAll("#pc-menu ul li")
  let currentIndex = 0;

  // -----------------------------------------------------------------

  function updeateButton() {
    prev.classList.remove("hidden");
    next.classList.remove("hidden");

    if (currentIndex === 0) {
      prev.classList.add("hidden");
    }
    if (currentIndex === contents.length - 1) {
      next.classList.add("hidden");
    }
  }

  function moveContent() {
    const contentWidth = contents[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * contentWidth * currentIndex}px)`;
  }

  function setupContentsButton() {
    for (let i = 0; i < contentsItems.length; i++) {
      contentsItems[i].addEventListener("click", () => {
        currentIndex = i;
        updeateButton();
        moveContent();
        updateContentsButton();
      });
    }
  }

  function updateContentsButton() {
    contentsItems.forEach((item) => {
      item.classList.remove("currentContent");
    });
    contentsItems[currentIndex].classList.add("currentContent");
  }



  // -----------------------------------------------------------------

  updeateButton();
  setupContentsButton();

  next.addEventListener("click", () => {
    currentIndex++;
    updeateButton();
    moveContent();
    updateContentsButton();
  });

  prev.addEventListener("click", () => {
    currentIndex--;
    updeateButton();
    moveContent();
    updateContentsButton();
  });

  window.addEventListener("resize", () => {
    moveContent();
  });

  const openButton = document.querySelector("#sp-menu-open");
  const closeButton = document.querySelector("#sp-menu-close");
  const menu = document.querySelector("#pc-menu");
  const mask = document.querySelector(".mask");

  openButton.addEventListener("click", ()=>{
    openButton.classList.add("hidden");
    closeButton.classList.add("show");
    menu.classList.add("show");
    mask.classList.add("show");
  });

  closeButton.addEventListener("click", ()=>{
    openButton.classList.remove("hidden");
    closeButton.classList.remove("show");
    menu.classList.remove("show");
    mask.classList.remove("show");
  });
}