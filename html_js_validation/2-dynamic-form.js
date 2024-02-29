document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dynamicForm");
    const selectNumber = document.getElementById("numFields");
    const inputContainer = document.getElementById("inputContainer");

    function generateInputFields(numFields) {
        // Clear previous fields
        inputContainer.innerHTML = '';

        for (let i = 1; i <= numFields; i++) {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = "field" + i;
            inputContainer.appendChild(inputField);
        }
    }

    function validateForm(event) {
        const inputFields = inputContainer.querySelectorAll("input[type='text']");

        for (let i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value.trim() === "") {
                alert("Please fill in all fields");
                event.preventDefault();
                return;
            }
        }
    }

    form.addEventListener("submit", validateForm);

    selectNumber.addEventListener("change", function() {
        const selectedValue = parseInt(selectNumber.value);
        if (selectedValue > 0) {
            generateInputFields(selectedValue);
        } else {
            inputContainer.innerHTML = ''; // Clear input fields if 0 is selected
        }
    });
});