
function showSection(sectionId) {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function togglePassword(id) {
    const field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}


function validateLoginId(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const loginId = document.getElementById("loginId").value.trim();
    const error = document.getElementById("loginError");

    if (!validateLoginId(loginId)) {
        error.textContent = "Enter a valid email or 10-digit phone number.";
        return;
    }
    error.textContent = "";
    alert("Login successful (UI Demo)");
});


function sendOTP() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        error.textContent = "Enter a valid email address.";
        return;
    }
    error.textContent = "";
    alert("OTP sent successfully!");
    showSection("otpSection");
}

document.querySelectorAll(".otp-input").forEach((input, index, inputs) => {
    input.addEventListener("input", () => {
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});


function verifyOTP() {
    const otp = Array.from(document.querySelectorAll(".otp-input"))
        .map(input => input.value)
        .join("");

    const error = document.getElementById("otpError");

    if (otp.length !== 6) {
        error.textContent = "Please enter the 6-digit OTP.";
        return;
    }
    error.textContent = "";
    alert("OTP verified!");
    showSection("resetSection");
}


document.getElementById("newPassword").addEventListener("input", function() {
    const value = this.value;
    const bar = document.getElementById("strengthBar");
    const text = document.getElementById("strengthText");

    let strength = 0;
    if (value.length >= 6) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[@$!%*?&]/.test(value)) strength++;

    const widths = ["0%", "25%", "50%", "75%", "100%"];
    const labels = ["", "Weak", "Fair", "Good", "Strong"];

    bar.style.width = widths[strength];
    text.textContent = labels[strength];
});


function resetPassword() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const error = document.getElementById("passwordError");

    if (newPassword !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return;
    }

    error.textContent = "";
    alert("Password reset successfully!");
    showSection("loginSection");
}