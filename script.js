let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let currentYear = new Date().getFullYear();
let newYearTime = new Date(`jan 01 ,2024 00:00:00`);

setInterval(() => {
  let currentTime = new Date();

  let diff = newYearTime - currentTime;

  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor(diff / 1000 / 60 / 60) % 24;
  let m = Math.floor(diff / 1000 / 60) % 60;
  let s = Math.floor(diff / 1000) % 60;

  days.innerText = d < 10 ? "0" + d : d;
  hours.innerText = h < 10 ? "0" + h : h;
  minutes.innerText = m < 10 ? "0" + m : m;
  seconds.innerText = s < 10 ? "0" + s : s;
}, 500);
