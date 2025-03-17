let count = 0;
const buttonText = document.getElementById("countText");
const buttonCount = document.getElementById("countBtn");
const buttonReset = document.getElementById("countReset");
const buttonUp = document.getElementById("countUp");
const buttonDown = document.getElementById("countDown");
// buttonCount.addEventListener("click", () => {
//   count = count + 1;
//   buttonText.textContent = count;
// });

buttonReset.addEventListener("click", () => {
  count = 0;
  buttonText.textContent = count;
});

buttonUp.addEventListener("click", () => {
  count = count + 1;
  buttonText.textContent = count;
});

buttonDown.addEventListener("click", () => {
  count = count - 1;
  if (count < 0) {
    count = 0;
  }
  buttonText.textContent = count;
});
