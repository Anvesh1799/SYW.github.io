const users = JSON.parse(localStorage.getItem("users") || "[]"); // Get stored users (if any)

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simulate user authentication (replace with your actual authentication logic)
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    loginMessage.textContent = "Login successful!";
    // Store user information in local storage (replace with your backend storage)
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    // Redirect to the personalized user page or dashboard
    window.location.href = "user-dashboard.html";
  } else {
    loginMessage.textContent = "Invalid email or password.";
  }
});
