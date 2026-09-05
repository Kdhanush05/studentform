
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const bioInput = document.getElementById("bio");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const bioCounter = document.getElementById("bioCounter");
const submitBtn = document.getElementById("submitBtn");

const std = document.getElementById("studentdetails");

// Validate Name
function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }

    if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Name must contain at least 3 characters";
        return false;
    }

    nameError.textContent = "";
    return true;
}

// Validate Email
function validateEmail() {
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    }

    emailError.textContent = "";
    return true;
}

// Validate Password
function validatePassword() {
    if (passwordInput.value === "") {
        passwordError.textContent = "Password is required";
        return false;
    }

    if (passwordInput.value.length < 8) {
        passwordError.textContent =
            "Password must contain at least 8 characters";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

// Update Submit button
function checkForm() {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    submitBtn.disabled = !(nameValid && emailValid && passwordValid);
}

// Real-time validation
nameInput.addEventListener("input", checkForm);
emailInput.addEventListener("input", checkForm);
passwordInput.addEventListener("input", checkForm);

// Bio character counter
bioInput.addEventListener("input", function () {
    const count = bioInput.value.length;

    bioCounter.textContent = `${count} / 200 characters`;
});

// Submit button
submitBtn.addEventListener("click", function(event) {

    event.preventDefault();

    const heading = document.createElement("h3");
    heading.textContent = "Student Details";

    const name = document.createElement("p");
    name.textContent = "Name: " + nameInput.value;

    const email = document.createElement("p");
    email.textContent = "Email: " + emailInput.value;

    const password = document.createElement("p");
    password.textContent = "Password: " + passwordInput.value;

    const bio = document.createElement("p");
    bio.textContent = "Bio: " + bioInput.value;

    std.append(heading, name, email, password, bio);
    alert("successfully login!!!!!!")
});
