document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("adminLoginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = loginForm.email.value.trim();
            const password = loginForm.password.value.trim();

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            try {
                const res = await fetch("/api/admin/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await res.json();

                if (res.ok) {
                    // Successful login – redirect to dashboard
                    window.location.href = "/dashboard.html";
                } else {
                    // Login failed
                    alert(data.message || "Login failed. Please check your credentials.");
                }
            } catch (err) {
                console.error("Login error:", err);
                alert("Something went wrong. Please try again later.");
            }
        });
    }
});