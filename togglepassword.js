document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const toggleButton = document.getElementById("togglePassword");
    const eyeIcon = document.getElementById("eyeIcon");

    let isPasswordVisible = false;

    toggleButton.addEventListener("click", function () {
        isPasswordVisible = !isPasswordVisible;

        if (isPasswordVisible) {
            passwordField.type = "text";
            eyeIcon.src = "../public/images/eye-password-hide-svgrepo-com.svg";
            eyeIcon.alt = "Hide Password";
        } else {
            passwordField.type = "password";
            eyeIcon.src = "../public/images/eye-password-show-svgrepo-com.svg";
            eyeIcon.alt = "Show Password";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password__2");
    const toggleButton = document.getElementById("togglePassword__2");
    const eyeIcon = document.getElementById("eyeIcon__2");

    let isPasswordVisible = false;

    toggleButton.addEventListener("click", function () {
        isPasswordVisible = !isPasswordVisible;

        if (isPasswordVisible) {
            passwordField.type = "text";
            eyeIcon.src = "../public/images/eye-password-hide-svgrepo-com.svg";
            eyeIcon.alt = "Hide Password";
        } else {
            passwordField.type = "password";
            eyeIcon.src = "../public/images/eye-password-show-svgrepo-com.svg";
            eyeIcon.alt = "Show Password";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password__3");
    const toggleButton = document.getElementById("togglePassword__3");
    const eyeIcon = document.getElementById("eyeIcon__3");

    let isPasswordVisible = false;

    toggleButton.addEventListener("click", function () {
        isPasswordVisible = !isPasswordVisible;

        if (isPasswordVisible) {
            passwordField.type = "text";
            eyeIcon.src = "../public/images/eye2-password-hide-svgrepo-com.svg";
            eyeIcon.alt = "Hide Password";
        } else {
            passwordField.type = "password";
            eyeIcon.src = "../public/images/eye2-password-show-svgrepo-com.svg";
            eyeIcon.alt = "Show Password";
        }
    });
});


