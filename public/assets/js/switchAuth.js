const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginBtn.addEventListener("click", () => {
    loginForm.classList.remove("visually-hidden")
    registerForm.classList.add("visually-hidden")
});

registerBtn.addEventListener("click", () => {
    loginForm.classList.add("visually-hidden")
    registerForm.classList.remove("visually-hidden")
});

