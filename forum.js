document.addEventListener('DOMContentLoaded', function() {
    const newPostButton = document.getElementById('newPostButton');
    const newPostForm = document.getElementById('newPostForm');
    const questionList = document.getElementById('questionList');
    const questionForm = document.getElementById('questionForm');
    const subjectFilter = document.getElementById('subjectFilter');
    const answeredFilter = document.getElementById('answeredFilter');

    // Show new post form when new post button is clicked
    newPostButton.addEventListener('click', function() {
        newPostForm.style.display = 'block';
    });

    // Submit new post form
    questionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form inputs
        const title = document.getElementById('postTitle').value.trim();
        const question = document.getElementById('postQuestion').value.trim();
        const subject = document.getElementById('postSubject').value;

        // Create a new question object
        const newQuestion = {
            title: title,
            question: question,
            subject: subject,
            answers: [] // Initialize answers array
        };

        // Add the question to the list and save to localStorage
        displayQuestion(newQuestion);
        saveQuestion(newQuestion);
        saveAskedQuestion(newQuestion); // Add this line to save the question as asked

        // Clear form inputs
        questionForm.reset();

        // Hide the new post form
        newPostForm.style.display = 'none';
    });

    // Function to display a question as a card
    function displayQuestion(question) {
        const listItem = document.createElement('li');
        listItem.classList.add('forum-question-card');

        // Create elements for title, subject, and question
        const titleElement = document.createElement('h3');
        titleElement.classList.add('forum-question-title');
        titleElement.textContent = question.title;

        const subjectElement = document.createElement('p');
        subjectElement.classList.add('forum-question-subject');
        subjectElement.textContent = question.subject;

        const questionElement = document.createElement('p');
        questionElement.classList.add('forum-question-text');
        questionElement.textContent = question.question;

        // Create answer form
        const answerForm = document.createElement('form');
        answerForm.classList.add('forum-answer-form');

        const answerInput = document.createElement('textarea');
        answerInput.classList.add('forum-answer-input');
        answerInput.placeholder = 'Your answer...';
        answerInput.required = true;

        const submitButton = document.createElement('button');
        submitButton.classList.add('forum-answer-submit');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit Answer';

        answerForm.appendChild(answerInput);
        answerForm.appendChild(submitButton);

        // Create answer list
        const answerList = document.createElement('ul');
        answerList.classList.add('forum-answer-list');

        // Populate answer list with existing answers
        question.answers.forEach(answerText => {
            displayAnswer(answerText, answerList);
        });

        // Append elements to the list item
        listItem.appendChild(titleElement);
        listItem.appendChild(subjectElement);
        listItem.appendChild(questionElement);
        listItem.appendChild(answerForm);
        listItem.appendChild(answerList);

        // Append list item to the question list
        questionList.appendChild(listItem);
    }

    // Function to save a question to localStorage
    function saveQuestion(question) {
        let questions = JSON.parse(localStorage.getItem('questions')) || [];
        questions.push(question);
        localStorage.setItem('questions', JSON.stringify(questions));
    }

    // Function to save a question as asked to localStorage
    function saveAskedQuestion(question) {
        let askedQuestions = JSON.parse(localStorage.getItem('askedQuestions')) || [];
        askedQuestions.push(question);
        localStorage.setItem('askedQuestions', JSON.stringify(askedQuestions));
    }

    // Submit answer form
    questionList.addEventListener('submit', function(event) {
        event.preventDefault();

        if (event.target.classList.contains('forum-answer-form')) {
            // Find the index of the question in the list
            const index = Array.from(questionList.children).indexOf(event.target.parentElement);

            // Get the answer text
            const answerText = event.target.querySelector('.forum-answer-input').value.trim();

            // Retrieve the question from local storage
            const questions = JSON.parse(localStorage.getItem('questions'));
            const question = questions[index];

            // Add the answer to the question object
            question.answers.push(answerText);

            // Update the question in local storage
            questions[index] = question;
            localStorage.setItem('questions', JSON.stringify(questions));

            // Clear the answer input field
            event.target.querySelector('.forum-answer-input').value = '';

            // Display the answer under the question
            displayAnswer(answerText, event.target.parentElement.querySelector('.forum-answer-list'));
        }
    });

    // Function to display an answer under the question
    function displayAnswer(answerText, answerList) {
        const answerItem = document.createElement('li');
        answerItem.classList.add('forum-answer-item');
        answerItem.textContent = answerText;
        answerList.appendChild(answerItem);
    }

    // Load questions from localStorage when the page loads
    function loadQuestions() {
        let questions = JSON.parse(localStorage.getItem('questions')) || [];
        questions.forEach(question => {
            displayQuestion(question);
        });
    }

    loadQuestions();

    // Filter questions by subject
    subjectFilter.addEventListener('change', filterQuestions);

    // Filter questions by answered status
    answeredFilter.addEventListener('change', filterQuestions);

    // Function to filter questions based on selected filters
    function filterQuestions() {
        const selectedSubject = subjectFilter.value;
        const filterByAnswered = answeredFilter.value;

        const questions = JSON.parse(localStorage.getItem('questions')) || [];

        questionList.innerHTML = ''; // Clear the question list
        

        questions.forEach(question => {
            if ((selectedSubject === '' || question.subject === selectedSubject) &&
                (filterByAnswered === '' ||
                    (filterByAnswered === 'answered' && question.answers.length > 0) ||
                    (filterByAnswered === 'unanswered' && question.answers.length === 0))) {
                displayQuestion(question);
            }
        });
    }
});