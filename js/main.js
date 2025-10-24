const toggleButton = document.querySelector('.nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('active');
    });

function updateCurrentTime() {
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    const now = new Date();
    const ms = now.getTime();
    const readable = now.toLocaleString(); // e.g., "10/23/2025, 10:45:03 AM"

    // The tests need the raw milliseconds in the element with data-testid
    timeElement.textContent = `${ms} (${readable})`;
  }
}

// Update once on load
updateCurrentTime();

// Optional: Update every second
setInterval(updateCurrentTime, 1000);
