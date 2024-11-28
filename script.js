let use12HourFormat = false; // Default to military time (24-hour format)

// Update the clock
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  let period = hours >= 12 ? ' PM' : ' AM'; // Determine AM or PM
  let displayHours = hours;

  if (use12HourFormat) {
    displayHours = hours % 12 || 12; // Convert 24-hour to 12-hour format
  } else {
    displayHours = String(hours).padStart(2, '0'); // Pad for military format
  }

  clockElement.textContent = `${displayHours}:${minutes}:${seconds}${period}`;
}

// Toggle the time format
function toggleTimeFormat() {
  use12HourFormat = document.getElementById('timeFormatToggle').checked;
  updateClock(); // Immediately update the clock to reflect the change
}

// Attach the toggle functionality to the checkbox
document.getElementById('timeFormatToggle').addEventListener('change', toggleTimeFormat);

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
