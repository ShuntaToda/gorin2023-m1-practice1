function convertColor() {
  let input = document.getElementById('colorInput').value;
  let result = document.getElementById('result');

  let isRGB = input.startsWith('rgb');
  let isHEX = input.startsWith('#');

  if (isRGB) {
    result.innerHTML = `HEX Value: ${rgbToHex(input)}`;
  } else if (isHEX) {
    result.innerHTML = `RGB Value: ${hexToRgb(input)}`;
  } else {
    result.innerHTML = 'Error: Invalid color format.';
  }
}

function rgbToHex(rgb) {
  let numbers = rgb.match(/\d+/g).map(Number);
  let hex = numbers.map(x => {
    let hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  });
  return "#" + hex.join("");
}

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    : null;
}