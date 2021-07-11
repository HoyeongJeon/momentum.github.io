const body = document.querySelector("body");
const IMG = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const chosenImg = IMG[Math.floor(Math.random() * IMG.length)];
const bgImg = document.createElement("img");
bgImg.src = "./built/background/" + chosenImg;
body.appendChild(bgImg);
