// Login Form Validation
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login Successful!");
    loginForm.reset();
  });
}

// Signup Form Validation
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Signup Successful!");
    signupForm.reset(); 
  });
}
// Get the contact form by its ID
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  // Add an event listener to the form for the submit event
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    // Display a success message if all fields are valid
    alert("Your message has been sent successfully!");
    contactForm.reset(); // Clear the form fields after successful submission
  });
}