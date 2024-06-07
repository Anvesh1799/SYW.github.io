const users = JSON.parse(localStorage.getItem("users") || "[]");

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginMessage = document.getElementById("login-message");
const registerMessage = document.getElementById("register-message");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simulate user authentication (replace with your actual authentication logic)
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    loginMessage.textContent = "Login successful!";
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "user-dashboard.html";
  } else {
    loginMessage.textContent = "Invalid email or password.";
  }
});

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  // Validate email uniqueness (replace with your actual validation logic)
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    registerMessage.textContent = "Email already registered.";
    return;
  }

  // Create a new user object
  const newUser = {
    name,
    email,
    password, // Store hashed password
  };

  // Add the new user to the user data
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  registerMessage.textContent = "Registration successful!";
  // Clear registration form fields
  registerForm.reset();
});
