import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ showOnlyTheLastOne: true, cssAnimation: false,});

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userDate = null;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day) ;
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

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
  onClose([selectedDates]) {
  userDate = selectedDates;
  
      if (userDate < Date.now()) {
      refs.startBtn.setAttribute('disabled', true);
          
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
   }, 1000)
    }     
};

 function  addLeadingZero(value){
 return String(value).padStart(2, '0')
};

function clockView({ days, hours, minutes, seconds }) {
 refs.days.textContent = addLeadingZero(`${days}`);
  refs.hours.textContent = addLeadingZero(`${hours}`);
  refs.minutes.textContent = addLeadingZero(`${minutes}`);
  refs.seconds.textContent = addLeadingZero(`${seconds}`);
};