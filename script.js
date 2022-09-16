const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")


function updateClock(){
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"

  if(h > 12){
    h = h - 12
    ampm = "PM"
  }

  //if hour is less than 10, write 0 + hour, else just use hour
  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s

  hourEl.innerText = h
  minuteEl.innerText = m
  secondEl.innerText = s
  ampmEl.innerHTML = ampm

  //executing the function every second after it expires (1000), infinite loop
  setTimeout(()=>{
    updateClock()
  }, 1000)
}

updateClock()