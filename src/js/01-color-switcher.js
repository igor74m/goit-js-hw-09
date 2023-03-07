
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const startButton = document.querySelector('[data-start]');
const stoptButton = document.querySelector('[data-stop]');

let intervalId = null;

startButton.addEventListener('click', (e) => {
   intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
   }, 1000);
   startButton.classList.add('disabled');
});
   
stoptButton.addEventListener('click', (e) => {
  clearInterval(intervalId);
  startButton.classList.remove('disabled');
});