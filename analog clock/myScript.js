var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

function setClockTime(){
    const day = new Date();
    const hh = day.getHours(); // 0 -23
    const mm = day.getMinutes(); // 0 -59
    const ss = day.getSeconds(); // 0 - 59

    const hourDeg = (hh * 30) + (mm * 0.5);  //every 60min,30Deg then 30/60 = 0.5 per minute
    const minuteDeg = (mm * 6)+ (ss * 0.1); // Every 60 second ,6deg then 6/60 = 0.1 pers sec
    const secondDeg = (ss * 6);

    hour.style.transform = `rotateZ(${hourDeg}deg)`;
    minute.style.transform = `rotateZ(${minuteDeg}deg)`;
    second.style.transform = `rotateZ(${secondDeg}deg)`;
}

setClockTime();

setInterval(setClockTime,1000);