import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ showOnlyTheLastOne: true, cssAnimation: false,});


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userDate = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day)) ;
  // Remaining hours
  const hours =addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000));

const refs = {
startBtn: document.querySelector('[data-start]'),
input : document.querySelector('#datetime-picker'),
days: document.querySelector('[data-days]'),
hours: document.querySelector('[data-hours]'),
minutes: document.querySelector('[data-minutes]'),
seconds: document.querySelector('[data-seconds]'),
};


refs.startBtn.addEventListener('click', () => {

timer.start();

});

refs.startBtn.setAttribute('disabled', true);

flatpickr("#datetime-picker", options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  userDate = selectedDates[0];
  
    if (userDate < Date.now()) {
     return Notify.failure("Please choose a date in the future");;
     };
  
    refs.startBtn.removeAttribute('disabled');
    return userDate;
       },
     
});

const timer = {
  intervalId: null,
  isActiv: false,

     start() {
    if (this.isActiv) {
      return;
    };
   
     const intervalId = setInterval(() => {
     const startTime = Date.now();
     this.isActiv = true;
     const deltaTime = userDate - startTime;
     let time = convertMs(deltaTime);

       if (deltaTime < 0){
         clearInterval(this.intervalId);
         refs.startBtn.setAttribute('disabled', true);
         Notify.success('coutdown is over');
          
         return;

     };

     clockView(time);
      console.log(deltaTime);
      console.log(time);   
   }, 1000)
     
  }
     
};


 function  addLeadingZero(value){
 return String(value).padStart(2, '0')
};

function clockView({ days, hours, minutes, seconds }) {
 refs.days.textContent =`${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
};





