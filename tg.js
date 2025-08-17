document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Log form data to the console (simulates sending data)
      console.log("Form Submitted!");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      // Show success message and clear form
      formMessage.textContent =
        "Thank you for your message! I will get back to you shortly.";
      formMessage.classList.remove("hidden");
      form.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.add("hidden");
      }, 5000);
    });
  }

  // Simple animation on scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
