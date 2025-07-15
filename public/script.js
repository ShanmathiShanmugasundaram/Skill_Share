document.getElementById("loginBtn").addEventListener("click", function () {
    alert("Redirecting to Login Page...");
});

document.getElementById("signupBtn").addEventListener("click", function () {
    alert("Redirecting to Sign Up Page...");
});

document.getElementById("exploreBtn").addEventListener("click", function () {
    alert("Exploring Skill Sessions...");
});
document.addEventListener("DOMContentLoaded", function () {
    // If on Sign-Up page
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
      signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default submission
        alert("Sign-up successful! Redirecting to Login...");
        // Redirect to the login page after a short delay (optional)
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1000);
      });
    }
  
    // If on Login page
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default submission
        alert("Login successful! Redirecting to Home...");
        // Redirect to the home page after a short delay (optional)
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      });
    }
  });
  