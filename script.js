const hand = document.querySelector(".hand");
const hoursElement = document.querySelector(".hours");
function rotate() {
  const date = new Date();
  const minutes = date.getMinutes() + date.getSeconds() / 60;
  const hours = date.getHours() + minutes / 60;
  hand.style.transform = `rotate(${minutes * 6}deg)`;
  hoursElement.style.transform = `rotate(${30 * (6 - hours) + minutes * 6}deg)`;
}
setInterval(() => {
  rotate();
}, 1000);
