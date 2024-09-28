document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const userType = document.getElementById('userType').value;

        // Save user profile locally
        localStorage.setItem('userProfile', JSON.stringify({
            name: name,
            email: email,
            password: password,
            userType: userType
        }));

        // Redirect to sign-in page
        window.location.href = 'login.html';
    });
});