document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("submitForm");

    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form field values
        const nameInput = document.getElementById("name").value.trim();
        const emailInput = document.getElementById("email").value.trim();

        // Perform validation
        if (nameInput === "" || emailInput === "") {
            // Display error message if any required field is empty
            alert("Please fill in all required fields");
        } else {
            // Clear any previous error message
            const errorElement = document.getElementById("error");
            errorElement.textContent = "";

            // Display success message
            alert("Form submitted successfully!");
            // Optional: Submit the form programmatically
            // form.submit();
        }
    }

    // Event listener for form submission
    form.addEventListener("submit", handleFormSubmit);
});