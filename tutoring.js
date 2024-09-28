document.addEventListener('DOMContentLoaded', function() {
    const tutoringRequestForm = document.getElementById('tutoringRequestForm');

    // Add event listener for tutoring request form submission
    tutoringRequestForm.addEventListener('submit', function(event) {
        window.location.href = 'login.html';

        // Clear form inputs
        alert("Tutoring Appointment for 04/30/2024 at 11:00 AM Successfully Booked!")
        tutoringRequestForm.reset();
    });

});