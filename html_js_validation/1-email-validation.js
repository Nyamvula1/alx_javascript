document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorElement = document.getElementById("error");

    function validateEmail(email) {
        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    form.addEventListener("submit", function(event) {
        // Retrieve email value from input field
        const emailValue = emailInput.value.trim();

        // Validate email format
        if (!validateEmail(emailValue)) {
            // Display error message
            errorElement.textContent = "Please enter a valid email address.";
            // Prevent form submission
            event.preventDefault();
        } else {
            // Clear any previous error message
            errorElement.textContent = "";
        }
    });
});