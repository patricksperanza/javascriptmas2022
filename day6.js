// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos!

function getRandomNumberOfTacos() {
  /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */
  let tacoTray = new Array()
  let numOfTacos = Math.floor(Math.random() * 10) + 1

  for (let i = 0; i < numOfTacos; i++) {
    tacoTray.push("")
  }
  return tacoTray.fill("🌮", 0, numOfTacos)
}

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`
    })
    .join("")
}

document.getElementById("tray").innerHTML = putTacosOnTray()
