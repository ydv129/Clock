function updateClock() {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
    const digitalTimeDisplay = document.getElementById('digital-time-display');
  
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Determine AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    hours = hours % 12 || 12; // Convert '0' hour to '12'
  
    // Analog Clock
    const hourDeg = (360 / 12) * (hours % 12) + (30 / 60) * minutes;
    const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds;
    const secondDeg = (360 / 60) * seconds;
  
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  
    // Digital Clock
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
    digitalTimeDisplay.textContent = formattedTime;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Initialize immediately
  