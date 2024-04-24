function clock() {
  let hour = document.getElementById("hour");
  let minutes = document.getElementById("minute");
  let seconds = document.getElementById("second");

  let month = document.getElementById("month");
  let date = document.getElementById("date");
  let day = document.getElementById("day");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let mont = new Date().getMonth();
  let d = new Date().getDate();
  let y = new Date().getFullYear();
  let dy = new Date().getDay();

  h = h % 12;
  h = h ? h : 12;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  d = d < 10 ? "0" + d : d;

  mont = months[mont].slice(0, 3);
  dy = days[dy].slice(0, 3);

  day.innerHTML = dy;
  month.innerHTML = mont;
  date.innerHTML = d;
  hour.innerHTML = h;
  minutes.innerHTML = m;
  
  setTimeout(clock, 1000);
}

clock();
