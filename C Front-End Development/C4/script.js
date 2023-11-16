const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let color = "#000"
let flag = false

const changeColor = (newColor) => {
  color = newColor
}

canvas.addEventListener("mousedown", (e) => {
  flag = true
})
document.addEventListener("mouseup", (e) => {
  flag = false
  ctx.beginPath()
})

canvas.addEventListener("mousemove", (e) => {
  if(!flag) return

  ctx.fillStyle = color
  ctx.strokeStyle = color
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.clientTop)
  ctx.stroke()
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.clientTop)
})

const saveImage = (format) => {
  const image = canvas.toDataURL("image/" + format)
  const link = document.createElement("a")
  link.download = "download." + format
  link.href = image
  link.click()
}