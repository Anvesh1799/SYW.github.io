// Open IndexedDB database
const dbPromise = indexedDB.open("ecommerce-users", 1);

dbPromise.then((db) => {
  // Create or upgrade object store for users
  const objectStore = db.transaction("users", "readwrite").objectStore("users");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulate user authentication (replace with your actual logic)
    const userRequest = objectStore.get(email);
    userRequest.onsuccess = (event) => {
      const user = event.target.result;
      if (user && user.password === password) {
        loginMessage.textContent = "Login successful!";
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "user-dashboard.html";
      } else {
        loginMessage.textContent = "Invalid email or password.";
      }
    };
  });

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Validate email uniqueness (replace with your actual logic)
    const userRequest = objectStore.get(email);
    userRequest.onsuccess = (event) => {
      const existingUser = event.target.result;
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

      // Add the new user to the object store
      const addRequest = objectStore.add(newUser);
      addRequest.onsuccess = () => {
        registerMessage.textContent = "Registration successful!";
        registerForm.reset();
      };
    };
  });
});

dbPromise.onerror = (error) => {
  console.error("Error opening IndexedDB database:", error);
};
