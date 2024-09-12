const canvas = document.getElementById('colorCanvas');
const ctx = canvas.getContext('2d');
let painting = false;
let currentColor = 'black';
let brushSize = 5;  // Default brush size

// Start painting
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

// Touch events for mobile devices
canvas.addEventListener('touchstart', startPosition);
canvas.addEventListener('touchend', endPosition);
canvas.addEventListener('touchmove', draw);

// Brush size input event
const brushSizeInput = document.getElementById('brushSize');
const brushValueLabel = document.getElementById('brushValue');

// Update brush size as the slider changes
brushSizeInput.addEventListener('input', function() {
  brushSize = this.value;
  brushValueLabel.textContent = this.value;  // Display the current brush size
});

function startPosition(e) {
  painting = true;
  draw(e); // Start drawing immediately on click/touch
}

function endPosition() {
  painting = false;
  ctx.beginPath(); // Reset the path to stop the line
}

function draw(e) {
  if (!painting) return;

  // Get correct mouse coordinates relative to canvas
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;    // Scale factor for X axis
  const scaleY = canvas.height / rect.height;  // Scale factor for Y axis

  const mouseX = (e.clientX || e.touches[0].clientX) - rect.left;
  const mouseY = (e.clientY || e.touches[0].clientY) - rect.top;

  const adjustedX = mouseX * scaleX;
  const adjustedY = mouseY * scaleY;

  ctx.lineWidth = brushSize;  // Use dynamic brush size
  ctx.lineCap = 'round';
  ctx.strokeStyle = currentColor;

  ctx.lineTo(adjustedX, adjustedY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(adjustedX, adjustedY);
}

// Color change functionality
document.querySelectorAll('.color-button').forEach(button => {
  button.addEventListener('click', () => {
    currentColor = button.getAttribute('data-color');
  });
});

// Clear canvas
document.getElementById('clearCanvas').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
