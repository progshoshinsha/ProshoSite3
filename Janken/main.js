"use strict";
{
  const jankenImage = [
    "img/janken_gu.png",
    "img/janken_choki.png",
    "img/janken_pa.png",
  ];
  const jankenButton = document.querySelectorAll(".jankenButton");
  const retryButton = document.querySelector(".retryButton");
  const myHand = document.querySelector(".myHand");
  const rivalHand = document.querySelector(".rivalHand");
  let text = document.querySelector(".textField p");
  let n = null;

  for (let i = 0; i < jankenButton.length; i++) {
    jankenButton[i].addEventListener("click", () => {
      myHand.src = jankenImage[i];
      n = Math.floor(Math.random() * jankenImage.length);
      rivalHand.src = jankenImage[n];
      console.log(`random: ${n} i: ${i}`);

      if (i === n) {
        text.textContent = "あいこ！";
      } else if (i === 0 && n === 1 || i === 1 && n === 2 || i === 2 && n === 0) {
        text.textContent = "あなたの勝ち！";
      } else {
        text.textContent = "あなたの負け！";
      }
    });
  };

  retryButton.addEventListener("click", () => {
    myHand.src = "img/mark_question.png";
    rivalHand.src = "img/mark_question.png";
    text.textContent = "";
  });
}