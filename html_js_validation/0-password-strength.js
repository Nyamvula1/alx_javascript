document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("passwordForm");
  const passwordInput = document.getElementById("password");
  const errorElement = document.getElementById("error");

  function validatePassword(password) {
      // Regular expression to validate password strength (at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character)
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
  }

  form.addEventListener("submit", function(event) {
      // Retrieve password value from input field
      const passwordValue = passwordInput.value.trim();

      // Validate password strength
      if (!validatePassword(passwordValue)) {
          // Display error message
          errorElement.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
          // Prevent form submission
          event.preventDefault();
      } else {
          // Clear any previous error message
          errorElement.textContent = "";
      }
  });
});