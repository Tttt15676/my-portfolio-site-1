document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const errorDiv = document.querySelector("#form-errors");
    const successDiv = document.querySelector("#form-success");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);

        // Send data via AJAX
        fetch("booking.php", {
            method: "POST",
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Server error");
                }
                return response.text(); // or .json() if your server returns JSON
            })
            .then(data => {
                form.reset();
                successDiv.textContent = "Booking submitted successfully!";
                successDiv.style.color = "green";
                errorDiv.textContent = "";
            })
            .catch(error => {
                errorDiv.textContent = "There was an error submitting your booking. Please try again.";
                errorDiv.style.color = "red";
                successDiv.textContent = "";
            });
    });
});