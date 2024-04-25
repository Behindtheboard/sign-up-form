let form = document.querySelector("form");
let password = document.querySelector("#password").value;
let confirmPassword = document.querySelector("#confirm-password").value;
let passwordError = document.querySelector("#error");
let submitBtn = document.querySelector("#submit-button");

submitBtn.addEventListener("click", (event) => {
    if (password !== confirmPassword) {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        passwordError.textContent("*Passwords do not match");
        event.preventDefault();
    }
});