const player = document.getElementById("player")

function playSong(id) {
  const frame = document.getElementById("player")
  frame.src = `https://www.youtube.com/embed/${id}?autoplay=1`
}
