const spotlight = document.querySelector("#spotlight")
let flag = false
let x
let y
let size = 50

window.addEventListener("mousewheel", (e) => {
  if (!flag) {
    return
  }

  if (e.wheelDelta > 0) { // up
    console.log("UP");
    size += 10
  } else { // down
    console.log("DOWN");
    size > 10 ? size -= 10 : size = 10
  }
  spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3) ${size}px, rgba(0, 0, 0, 0.8) ${size + 20}px)`
})

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mousemove", (e) => {
    if (!flag) {
      return
    }
    x = e.clientX
    y = e.clientY
    spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3) ${size}px, rgba(0, 0, 0, 0.8) ${size + 20}px)`
  })
  img.addEventListener("mouseenter", () => {
    spotlight.style.display = "block"
    flag = true
  })
  img.addEventListener("mouseleave", () => {
    spotlight.style.display = ""
    flag = false
  })
})