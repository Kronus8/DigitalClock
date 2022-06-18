const clock = document.getElementById('clockDisplay');

function displayTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let period = "AM";

    if (h > 12) {
        period = "PM";
    }
  
    let time = `${h}:${m}:${s} ${period}`;
  
    clock.innerText = time;
    clock.textContent = time;
  
    setTimeout(displayTime, 1000);
}

displayTime();