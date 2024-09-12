const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');

const countdown = () => {
  const now = new Date().getTime();
  const targetDate = new Date('2024-09-29T00:00:00').getTime();
  const difference = targetDate - now;

  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  // Pad single-digit hours and minutes with a leading zero
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  hoursElement.textContent = formattedHours;
  minutesElement.textContent = formattedMinutes;
};

setInterval(countdown, 1000);