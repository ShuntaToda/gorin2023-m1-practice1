document.addEventListener('click', function (e) {
  const ripple = document.createElement('div');

  ripple.className = 'animation';
  ripple.style.left = `${e.pageX}px`;
  ripple.style.top = `${e.pageY}px`;

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});
