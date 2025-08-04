document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        let isValid = true;
        let messages = [];

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const date = document.querySelector("#date");
        const time = document.querySelector("#time");

        // Name validation
        if (!name.value.trim()) {
            isValid = false;
            messages.push("Name is required.");
        }

        // Email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.trim() || !emailPattern.test(email.value)) {
            isValid = false;
            messages.push("Enter a valid email address.");
        }

        // Phone validation
        const phonePattern = /^\d{10}$/;
        if (!phone.value.trim() || !phonePattern.test(phone.value)) {
            isValid = false;
            messages.push("Enter a valid 10-digit phone number.");
        }

        // Date validation
        if (!date.value.trim()) {
            isValid = false;
            messages.push("Date is required.");
        }

        // Time validation
        if (!time.value.trim()) {
            isValid = false;
            messages.push("Time is required.");
        }

        // Show errors
        const errorDiv = document.querySelector("#form-errors");
        if (!isValid) {
            e.preventDefault();
            errorDiv.innerHTML = messages.map(msg => `<p>${msg}</p>`).join("");
            errorDiv.style.color = "red";
            errorDiv.style.marginBottom = "1em";
        }
    });
});