document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutButton');
    const userNameElement = document.getElementById('userName');
    const askedQuestionsList = document.getElementById('askedQuestions');

    // Check if the user is logged in
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        // Show user's name
        const userName = sessionStorage.getItem('userName');
        userNameElement.textContent = userName;

        // Show asked questions
        const askedQuestions = JSON.parse(localStorage.getItem('askedQuestions')) || [];
        renderAskedQuestions(askedQuestions);

        renderSampleTutoringAppointment();
        // renderSampleTutoringAppointment2();
    } else {
        // If not logged in, redirect to login page
        window.location.href = 'login.html';
    }

    // Add event listener for logout button
    logoutButton.addEventListener('click', function() {
        // Clear session storage to log out the user
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userType');
        // Redirect to login page
        window.location.href = 'login.html';
    });

    function renderAskedQuestions(questions) {
        askedQuestionsList.innerHTML = '';
        questions.forEach(question => {
            // Create a div element for the question card
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('forum-question-card');

            // Create an anchor element for the title link
            const titleLink = document.createElement('a');
            titleLink.href = `forum.html?questionId=${question.id}`; // Adjust with the actual ID property of your question object
            titleLink.textContent = question.title;
            titleLink.classList.add('forum-question-title');

            // Create elements for subject and question
            const subjectElement = document.createElement('p');
            subjectElement.classList.add('forum-question-subject');
            subjectElement.textContent = question.subject;

            const questionElement = document.createElement('p');
            questionElement.classList.add('forum-question-text');
            questionElement.textContent = question.question;

            // Append elements to the question card
            cardDiv.appendChild(titleLink);
            cardDiv.appendChild(subjectElement);
            cardDiv.appendChild(questionElement);

            // Append the question card to the askedQuestionsList
            askedQuestionsList.appendChild(cardDiv);
        });
    }

    // Function to render saved resources as cards
    function renderSavedResources() {
        const savedResourcesList = document.getElementById('savedResources'); // Get the saved resources list
        savedResourcesList.innerHTML = ''; // Clear the existing list

        // Retrieve saved resources from local storage or initialize an empty array
        let savedResources = JSON.parse(localStorage.getItem('savedResources')) || [];

        savedResources.forEach((resource, index) => {
            // Create card container for each resource
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('resource-card');

            // Create title element
            const titleElement = document.createElement('h4');
            titleElement.textContent = resource;
            cardDiv.appendChild(titleElement);

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            removeButton.dataset.index = index; // Set index for identifying the resource to remove
            cardDiv.appendChild(removeButton);

            // Append card to the saved resources list
            savedResourcesList.appendChild(cardDiv);
        });
    }

    // Event delegation for remove button click
    document.getElementById('savedResources').addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-button')) {
            const index = event.target.dataset.index;
            removeSavedResource(index);
        }
    });

    function renderSampleTutoringAppointment() {
        // Create a sample tutoring appointment
        const sampleAppointment = {
            title: "Help Understanding Dynamic Memory Allocation!",
            details: "Hi, I am a student taking CS230 at UMass Amherst and I am very confused about dynamic memory allocation in C. I would like to meet at this time to review the concept.",
            subject: "Programming in C",
            date: "2024-05-01", // Sample date
            time: "12:00 PM" // Sample time
        };
    
        // Create a div element for the tutoring appointment card
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('tutoring-appointment-card');
    
        // Create elements for title, details, subject, date, and time
        const titleElement = document.createElement('h3');
        titleElement.textContent = sampleAppointment.title;
    
        const detailsElement = document.createElement('p');
        detailsElement.textContent = sampleAppointment.details;
        detailsElement.classList.add('tutoring-appointment-details');
    
        const subjectElement = document.createElement('p');
        subjectElement.textContent = sampleAppointment.subject;
        subjectElement.classList.add('tutoring-appointment-subject');
    
        const dateElement = document.createElement('p');
        dateElement.textContent = sampleAppointment.date;
        dateElement.classList.add('tutoring-appointment-date');
    
        const timeElement = document.createElement('p');
        timeElement.textContent = sampleAppointment.time;
        timeElement.classList.add('tutoring-appointment-time');
    
        // Append elements to the tutoring appointment card
        cardDiv.appendChild(titleElement);
        cardDiv.appendChild(detailsElement);
        cardDiv.appendChild(subjectElement);
        cardDiv.appendChild(dateElement);
        cardDiv.appendChild(timeElement);
    
        // Append the tutoring appointment card to the list
        const tutoringAppointmentsList = document.getElementById('tutoringAppointmentsList');
        tutoringAppointmentsList.appendChild(cardDiv);
    }

    function renderSampleTutoringAppointment2() {
        // Create a sample tutoring appointment
        const sampleAppointment = {
            title: "Help!!",
            details: "Details Here",
            subject: "Programming in C",
            date: "2024-04-30", // Sample date
            time: "11:00 AM" // Sample time
        };
    
        // Create a div element for the tutoring appointment card
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('tutoring-appointment-card');
    
        // Create elements for title, details, subject, date, and time
        const titleElement = document.createElement('h3');
        titleElement.textContent = sampleAppointment.title;
    
        const detailsElement = document.createElement('p');
        detailsElement.textContent = sampleAppointment.details;
        detailsElement.classList.add('tutoring-appointment-details');
    
        const subjectElement = document.createElement('p');
        subjectElement.textContent = sampleAppointment.subject;
        subjectElement.classList.add('tutoring-appointment-subject');
    
        const dateElement = document.createElement('p');
        dateElement.textContent = sampleAppointment.date;
        dateElement.classList.add('tutoring-appointment-date');
    
        const timeElement = document.createElement('p');
        timeElement.textContent = sampleAppointment.time;
        timeElement.classList.add('tutoring-appointment-time');
    
        // Append elements to the tutoring appointment card
        cardDiv.appendChild(titleElement);
        cardDiv.appendChild(detailsElement);
        cardDiv.appendChild(subjectElement);
        cardDiv.appendChild(dateElement);
        cardDiv.appendChild(timeElement);
    
        // Append the tutoring appointment card to the list
        const tutoringAppointmentsList = document.getElementById('tutoringAppointmentsList');
        tutoringAppointmentsList.appendChild(cardDiv);
    }

    function removeSavedResource(index) {
        // Retrieve saved resources from local storage
        let savedResources = JSON.parse(localStorage.getItem('savedResources')) || [];

        // Remove resource at the specified index
        savedResources.splice(index, 1);

        // Update local storage
        localStorage.setItem('savedResources', JSON.stringify(savedResources));

        // Re-render the saved resources
        renderSavedResources();
    }

    // Call the function to render saved resources when the page loads
    renderSavedResources();
});