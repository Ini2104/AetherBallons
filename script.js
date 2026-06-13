const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json"
    }
  });

  if (response.ok) {
    form.reset();
    successMessage.textContent =
      "Thank you! Your message has been sent successfully.";
    successMessage.style.color = "#4CAF50";
  } else {
    successMessage.textContent =
      "Sorry, there was a problem sending your message.";
    successMessage.style.color = "#ff6b6b";
  }
});