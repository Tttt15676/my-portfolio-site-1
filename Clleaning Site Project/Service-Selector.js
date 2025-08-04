document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[name='services[]']");
    const selectedOutput = document.querySelector("#selected-services");

    function updateSelectedServices() {
        const selected = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selected.push(checkbox.value);
            }
        });

        // Display selected services
        if (selectedOutput) {
            selectedOutput.textContent = selected.length > 0
                ? "Selected Services: " + selected.join(", ")
                : "No services selected.";
        }
    }

    checkboxes.forEach(cb => cb.addEventListener("change", updateSelectedServices));

    // Initialize display on load
    updateSelectedServices();
});