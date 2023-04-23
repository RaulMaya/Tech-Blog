const logOutBtn = document.getElementById("logoutBtn");

const logout = async (event) => {
  event.preventDefault();
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    window.location.reload(true);
  } else {
    alert("Failed to log out.");
  }
};

logOutBtn.addEventListener("click", logout);
