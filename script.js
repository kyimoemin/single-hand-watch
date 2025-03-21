const hand = document.querySelector(".hand");
const hours = document.querySelector(".hours");

function rotate() {
  if (!hand || !hours) return;
  const date = new Date();
  const minutes = date.getMinutes() + date.getSeconds() / 60;
  hand.style.transform = `rotate(${minutes * 6}deg)`;
}
setInterval(() => {
  rotate();
}, 1000);
