
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")

const launchIn = "25 March 2023";

function countdown() {

  const launchInDate = new Date(launchIn);
  const currentDate = new Date();

  const totalSeconds = (launchInDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24); // Segundos para dias
  const hours = Math.floor(totalSeconds / 3600 ) % 24; // Segundos para horas
  const mins = Math.floor(totalSeconds / 60) % 60; // Segundos para minutos
  const seconds = Math.floor(totalSeconds) % 60;// Segundos

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);