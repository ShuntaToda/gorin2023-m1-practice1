
let canvas = document.getElementById('drawingCanvas');
let ctx = canvas.getContext('2d');

let painting = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

let color = '#000000';

function startPosition(e) {
  painting = true;
  draw(e);
}

function finishedPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function changeColor(newColor) {
  color = newColor;
}

function saveImage(format) {
  let image = canvas.toDataURL(`image/${format}`).replace(`image/${format}`, "image/octet-stream");
  let link = document.createElement('a');
  link.download = `my_drawing.${format}`;
  link.href = image;
  link.click();
}