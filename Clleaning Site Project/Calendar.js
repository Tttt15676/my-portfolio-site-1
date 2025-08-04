document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.querySelector("#date");
    const timeInput = document.querySelector("#time");

    // Disable past dates
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);

    // Optional: block specific dates (e.g., holidays)
    const blockedDates = [
        "2025-12-25",
        "2025-01-01",
        "2025-07-04"
    ];

    dateInput.addEventListener("change", function () {
        const selectedDate = dateInput.value;
        if (blockedDates.includes(selectedDate)) {
            alert("We're closed on this date. Please choose another.");
            dateInput.value = "";
        }
    });

    // Restrict time input to business hours (09:00–18:00)
    timeInput.setAttribute("min", "09:00");
    timeInput.setAttribute("max", "18:00");
});