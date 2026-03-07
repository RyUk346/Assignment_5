const loginBtn = document.getElementById("loginBtn");
const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {
    window.location.href = "home.html";
  } else {
    alert("Invalid username or password");
  }
});
