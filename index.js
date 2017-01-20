// Grab slider element
const slider = document.querySelector('.items');
// Initialize mousedown flag
let isDown = false;
// Initialize position variables
let startX, scrollLeft;

slider.addEventListener('mousedown', (event) => {
  // Toggle mousedown flag
  isDown = true;
  // Add class for cursor grabbing
  slider.classList.add('active');
  // Set start point, adjusting for margin
  startX = event.pageX - slider.offsetLeft;
  // Set slider origin point
  scrollLeft = slider.scrollLeft;
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

slider.addEventListener('mousemove', (event) => {
  // Check mousedown flag and exit if false
  if(!isDown) return;
  // Prevent text selection, etc by browser
  event.preventDefault();
  // Determine current cursor location
  const x = event.pageX - slider.offsetLeft;
  // Determine change - increase for better UX
  const walk = (x - startX) * 3;
  // Move slider
  slider.scrollLeft = scrollLeft - walk;
});
