// Countdown Timer
const countdown = () => {
  const countDate = new Date('April 28, 2025 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.getElementById('days').innerText = textDay;
  document.getElementById('hours').innerText = textHour;
  document.getElementById('minutes').innerText = textMinute;
  document.getElementById('seconds').innerText = textSecond;
};

// Update the clock
setInterval(countdown, 1000);

const handleRouting = () => {
  if (window.location.pathname === '/rss') {
    window.location.replace('/rss.xml');
  }
  else if (window.location.pathname === '/journals') {
    window.location.replace('/journals.html');
  }
  else if (window.location.pathname === '/home') {
    window.location.replace('/index.html');
  }
  else {
    window.location.replace('/404.html');
  }
};
// Listen for URL changes
window.addEventListener('popstate', handleRouting);
