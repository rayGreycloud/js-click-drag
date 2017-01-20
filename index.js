const slider = document.querySelector('.items');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (event) => {
  // Toggle mousedown flag
  isDown = true;
  // Add class for cursor grabbing
  slider.classList.add('active');
  // Set start point, adjusting for margin
  startX = event.pageX - slider.offsetLeft;
  console.log(startX);
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  // Turn off cursor grabbing
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
  // Check mousedown flag and exit if false
  if(!isDown) return;

  console.log('Moving mouse...');
  console.log(`Start point: ${startX}`);
});
