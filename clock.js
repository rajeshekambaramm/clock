let seconds_Hand = document.querySelector("#second");
let minutes_Hand = document.querySelector("#minute");
let hours_Hand = document.querySelector("#hour");
setInterval(clockRotation, 1000)
function clockRotation() {
    var date = new Date();
    var getSeconds = date.getSeconds() / 60;
    var getMinutes = date.getMinutes() / 60;
    var getHours = date.getHours() / 12;
    seconds_Hand.style.transform = "rotate(" + getSeconds * 360 + "deg)"
    minutes_Hand.style.transform = "rotate(" + getMinutes * 360 + "deg)"
    hours_Hand.style.transform = "rotate(" + getHours * 360 + "deg)"
    document.querySelector(".current-day").innerHTML = date.toDateString()
}

