const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const digitalTime  = document.querySelector('.digital')
function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minDegrees = (minutes * 6) + (seconds* 6)/60 +90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour*30 + ((minutes * 6)/12)  + 90);
  hourHand.style.transform = `translate(43%,10%) rotate(${hourDegrees}deg)`;

  var AmOrPm = hour >= 12 ? 'PM' : 'AM';
  hours = (hour % 12) || 12;
  digitalTime.innerHTML = `${hours}:${minutes}:${seconds} ${AmOrPm} `;

}

setInterval(setTime, 1000);

function setDate(){

  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();

  console.log(`${ date } / ${month} / ${year}`);

  const weekDay = now.getDay()+1;
  const weekListElement = document.querySelector(`.weekList li:nth-child(${ weekDay })`);
  weekListElement.style.display = 'block';

  const dateElement = document.querySelector('.date');
  dateElement.innerHTML = ` ${ date } / ${month} / ${year}`

}

function analogOrDigital() {
  var clockDiv = document.querySelector(".clock");
  var digDiv = document.querySelector(".digital");
  if (clockDiv.style.display === "none") {
    clockDiv.style.display = "block";
    digDiv.style.display = "none";
  } else {
    clockDiv.style.display = "none";
    digDiv.style.display = "block";
  }
} 
