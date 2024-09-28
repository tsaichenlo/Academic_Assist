document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Check if the entered credentials match the specified credentials
        if (email === 'samplestudent@umass.edu' && password === 'password') {
            // Save login status and user information in sessionStorage
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userName', 'Student');
            sessionStorage.setItem('userType', 'student');

            // Redirect to dashboard page on successful login
            window.location.href = 'dashboard.html';
        } else {
            // Display error message if credentials are incorrect
            alert('Invalid email or password. Please try again.');
        }
    });
});