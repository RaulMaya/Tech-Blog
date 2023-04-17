const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstname = document.querySelector("#firstNameSignUp").value.trim();
  const lastname = document.querySelector("#lastNameSignUp").value.trim();
  const username = document.querySelector("#usernameSignUp").value.trim();
  const email = document.querySelector("#emailSignUp").value.trim();
  const password = document.querySelector("#passwordSignUp").value.trim();
  const confPassword = document
    .querySelector("#confirmPasswordSignUp")
    .value.trim();

  console.log(confPassword);
  console.log(password);

  if (password === confPassword) {
    if (firstname && lastname && username && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
          confPassword,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert("Failed to sign up.");
      }
    }
  } else {
    document.querySelector("#passwordSignUp").classList.add("border");
    document.querySelector("#passwordSignUp").classList.add("border-danger");
    document.querySelector("#confirmPasswordSignUp").classList.add("border");
    document
      .querySelector("#confirmPasswordSignUp")
      .classList.add("border-danger");
  }
};

document
  .getElementById("authItem")
  .addEventListener("submit", signupFormHandler);
