const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const randomPosition = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min
}
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}
for (let i = 0; i < 10; i++){
  console.log(ctx)
  const size = randomPosition(100, 30)
  ctx.beginPath()
  ctx.fillStyle = randomColor()
  ctx.arc(randomPosition(canvas.width - size, size), randomPosition(canvas.height - size, size), size, 0, 2 * Math.PI)
  ctx.fill()
}