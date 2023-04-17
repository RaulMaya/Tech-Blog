const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#emailLogIn").value.trim();
  const password = document.querySelector("#passwordLogIn").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      window.location.reload();
    } else {
      alert("Failed to log in.");
    }
  }
};

document
  .getElementById("authItem")
  .addEventListener("submit", loginFormHandler);
