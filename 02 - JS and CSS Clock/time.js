const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
function setTime() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds*6)+90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minDegrees = (minutes*6)+90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;


  const hour = now.getHours();      
  const hourDegrees = (hour*30)+90;
  hourHand.style.transform = `translate(25%) rotate(${hourDegrees}deg)`;

}

setInterval(setTime,1000)