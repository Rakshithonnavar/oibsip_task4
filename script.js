    const signupForm = document.querySelector('#signup-form');
    const loginForm = document.querySelector('#login-form');

   
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get input values
        const name = document.querySelector('#Name').value;
        const email = document.querySelector('#Email').value;
        const username = document.querySelector('#Username').value;
        const password = document.querySelector('#Password').value;
        const confirmPassword = document.querySelector('#Confirm-password').value;

        // Add your validation logic here
        if (Name === '' || Email === '' || Username === '' || Password === '' || ConfirmPassword === '') {
            alert('Please fill in all fields');
        } else if (Password !== ConfirmPassword) {
            alert('Passwords do not match');
        } else {
            // If validation passes, you can send data to the server or store it locally.
            // Add your code for registration here.
            alert('Registration successful!');
            // Redirect to login page or perform other actions
        }
    });


    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get input values
        const loginUsername = document.querySelector('#login-username').value;
        const loginPassword = document.querySelector('#login-password').value;

        // Add your validation logic here
        if (loginUsername === '' || loginPassword === '') {
            alert('Please fill in all fields');
        } else {
            // If validation passes, you can send data to the server for authentication.
            // Add your code for authentication here.
            alert('Login successful!');
            // Redirect to the main page or perform other actions
        }
    });
