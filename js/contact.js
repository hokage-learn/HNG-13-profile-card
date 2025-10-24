document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("contactSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successMsg.hidden = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    let isValid = true;

    // Name
    if (!name) {
      showError("error-name", "Full name is required.");
      isValid = false;
    }

    // Email
    if (!email) {
      showError("error-email", "Email is required.");
      isValid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      showError("error-email", "Please enter a valid email address.");
      isValid = false;
    }

    // Subject
    if (!subject) {
      showError("error-subject", "Subject is required.");
      isValid = false;
    }

    // Message
    if (!message) {
      showError("error-message", "Message is required.");
      isValid = false;
    } else if (message.length < 10) {
      showError("error-message", "Message must be at least 10 characters long.");
      isValid = false;
    }

    if (isValid) {
      form.reset();
      successMsg.hidden = false;
      successMsg.focus();
    }
  });

  function showError(id, message) {
    const el = document.getElementById(id);
    el.textContent = message;
  }
});
