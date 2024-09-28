document.addEventListener('DOMContentLoaded', function() {
    const plusButtons = document.querySelectorAll('.add-button');

    // Add event listener to each plus button
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the resource name from the data-resource attribute
            const resourceName = this.getAttribute('data-resource');
            
            // Retrieve saved resources from local storage or initialize an empty array
            const savedResources = JSON.parse(localStorage.getItem('savedResources')) || [];

            // Add the new resource to the saved resources array
            savedResources.push(resourceName);
            alert("Resource [" + resourceName + "] successfully added!")

            // Store the updated saved resources array back to local storage
            localStorage.setItem('savedResources', JSON.stringify(savedResources));

            console.log("Resource added:", resourceName);
        });
    });
});