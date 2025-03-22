/**
 * @type {HTMLSpanElement|null}
 */
const hand = document.querySelector(".hand");
/**
 * @type {HTMLDivElement|null}
 */
const hoursElement = document.querySelector(".hours");

function rotate() {
  if (!hand || !hoursElement) throw new Error("Element not found");
  const date = new Date();
  const minutes = date.getMinutes() + date.getSeconds() / 60;
  const hours = date.getHours() + minutes / 60;
  const minuteDegree = minutes * 6;
  const hoursDegree = 30 * (6 - hours) + minutes * 6;

  hand.style.transform = `rotate(${minuteDegree}deg)`;
  hoursElement.style.transform = `rotate(${hoursDegree}deg)`;
  document.documentElement.style.setProperty(
    "--hand-shadow",
    getHandShadow(minuteDegree)
  );
}

function getHandShadow(degree) {
  degree += 45; // 45 degree of shadow
  const radians = degree * (Math.PI / 180);
  const x = 5 * Math.sin(radians);
  const y = 5 * Math.cos(radians);
  const lx = 1 * Math.sin(radians);
  const ly = 1 * Math.cos(radians);
  console.log({ lx, ly });
  return `${lx}px ${ly}px 1px -0.5px hsla(0,0%,100%,1) inset ,${x}px ${y}px 5px -1px  hsla(0, 0%, 0%, 1)`;
}

setInterval(() => {
  rotate();
}, 1000);
