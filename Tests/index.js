let welcomeEl = document.getElementById("welcome-el")

let name = "Mohit"
let greeting = " Welcome back, "

welcomeEl.innerText = (greeting + name)

// welcomeEl.innerText = welcomeEl.innerText + " 👋"
welcomeEl.innerText += " 👋"