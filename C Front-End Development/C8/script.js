
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomPosition(limit) {
  return Math.floor(Math.random() * limit);
}

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const colorArray = Array(10).fill(null).map(() => getRandomColor());

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.arc(getRandomPosition(canvas.width), getRandomPosition(canvas.height), 50, 0, Math.PI * 2);
    ctx.fillStyle = colorArray[i];
    ctx.fill();
  }
});
