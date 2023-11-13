let lightMode = true;

function toggleMode() {
  lightMode = !lightMode;
  document.body.style.backgroundColor = lightMode ? '#FFF' : '#000';
  document.body.style.color = lightMode ? '#000' : '#FFF';
  document.getElementById('content').innerText = lightMode ? 'Light Mode Text' : 'Night Mode Text';
}