let fn = prompt("First name please!")
let ln = prompt("Last name please!")
let by = prompt("When is your birth year?")
document.getElementById("stop").innerHTML = "Hello " + fn + " " + ln + "! How does it feel to be " + String(2025 - by) + " years old?";