window.onload = function () {
  let canvas = document.getElementById('myCanvas');
  let context = canvas.getContext('2d');
  let x = 25;
  let speed = 2;

  function drawCircle(xPosition) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(xPosition, canvas.height / 2, 25, 0, Math.PI * 2, false);
    context.fillStyle = "#000";
    context.fill();
  }

  setInterval(function () {
    x += speed;
    if (x > canvas.width) {
      x = 25;
    }
    drawCircle(x);
  }, 20);
}
