document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");

  function showError(input, message) {
    clearError(input);
    const error = document.createElement("div");
    error.className = "error-message";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
    input.classList.add("input-error");
  }

  function clearError(input) {
    input.classList.remove("input-error");
    const next = input.nextElementSibling;
    if (next && next.classList.contains("error-message")) {
      next.remove();
    }
  }

  function isValidPhone(phone) {
    return /^\+251[0-9]{9}$/.test(phone);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Clear previous errors
    form.querySelectorAll(".error-message").forEach((err) => err.remove());
    form
      .querySelectorAll(".input-error")
      .forEach((inp) => inp.classList.remove("input-error"));

    // Required fields to check
    const requiredInputs = [
      "student-first-name",
      "student-birthday",
      "student-grade",
      "parent-first-name",
      "parent-last-name",
      "parent-email",
      "parent-phone",
      "parent-country",
      "parent-region",
      "parent-city",
    ];

    requiredInputs.forEach((id) => {
      const input = document.getElementById(id);
      if (!input.value.trim()) {
        showError(input, "This field is required");
        isValid = false;
      } else {
        clearError(input);
      }
    });

    // Validate optional student email if filled
    const studentEmail = document.getElementById("student-email");
    if (studentEmail.value.trim() && !studentEmail.checkValidity()) {
      showError(studentEmail, "Please enter a valid email");
      isValid = false;
    }

    // Validate parent email required & format
    const parentEmail = document.getElementById("parent-email");
    if (!parentEmail.value.trim()) {
      showError(parentEmail, "This field is required");
      isValid = false;
    } else if (!parentEmail.checkValidity()) {
      showError(parentEmail, "Please enter a valid email");
      isValid = false;
    }

    // Validate phone numbers
    const studentPhone = document.getElementById("student-phone");
    if (studentPhone.value.trim() && !isValidPhone(studentPhone.value.trim())) {
      showError(
        studentPhone,
        "Phone must start with +251 followed by 9 digits"
      );
      isValid = false;
    }

    const parentPhone = document.getElementById("parent-phone");
    if (!parentPhone.value.trim()) {
      showError(parentPhone, "This field is required");
      isValid = false;
    } else if (!isValidPhone(parentPhone.value.trim())) {
      showError(parentPhone, "Phone must start with +251 followed by 9 digits");
      isValid = false;
    }

    // Validate gender radio
    const genderRadios = document.querySelectorAll(
      'input[name="studentGender"]'
    );
    if (![...genderRadios].some((radio) => radio.checked)) {
      const genderGroup = document.querySelector(".gender-group");
      if (
        genderGroup &&
        !genderGroup.nextElementSibling?.classList.contains("error-message")
      ) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.textContent = "Please select a gender";
        genderGroup.insertAdjacentElement("afterend", error);
      }
      isValid = false;
    } else {
      const next = document.querySelector(".gender-group + .error-message");
      if (next) next.remove();
    }

    if (isValid) {
      // Confirmation before submission
      if (confirm("Are you sure you want to submit the registration form?")) {
        alert("You are registered!\nThank you for coming!");
        form.reset();
      }
    } else {
      // Scroll to first error
      const firstError = form.querySelector(".error-message");
      if (firstError)
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});
