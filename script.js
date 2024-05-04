document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var password = document.getElementById("password").value;

    if (password === "M4CK") {
        document.getElementById("passwordForm").reset(); // Clear password field
        document.getElementById("passwordError").classList.add("hidden"); // Hide password error message
        // Here you can add logic to redirect to the main repository page
        window.location.href = "repository.html"; // Redirect to main repository page
    } else {
        document.getElementById("passwordError").classList.remove("hidden"); // Show password error message
    }
});
