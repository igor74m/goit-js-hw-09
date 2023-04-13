function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16).padStart(6, 0)}`;
};

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;
  
startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
startBtn.setAttribute('disabled', true);  
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
});
