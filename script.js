    // const signupForm = document.querySelector('#signup-form');
    // const loginForm = document.querySelector('#login-form');

   
    // signupForm.addEventListener('submit', function (e) {
    //     e.preventDefault();

    //     // Get input values
    //     const name = document.querySelector('#Name').value;
    //     const email = document.querySelector('#Email').value;
    //     const username = document.querySelector('#Username').value;
    //     const password = document.querySelector('#Password').value;
    //     const confirmPassword = document.querySelector('#Confirm-password').value;

    //     // Add your validation logic here
    //     if (Name === '' || Email === '' || Username === '' || Password === '' || ConfirmPassword === '') {
    //         alert('Please fill in all fields');
    //     } else if (Password !== ConfirmPassword) {
    //         alert('Passwords do not match');
    //     } else {
    //         // If validation passes, you can send data to the server or store it locally.
    //         // Add your code for registration here.
    //         alert('Registration successful!');
    //         // Redirect to login page or perform other actions
    //     }
    // });


    // loginForm.addEventListener('submit', function (e){
    //     e.preventDefault();

    //     // Get input values
    //     const loginUsername = document.querySelector('#login-username').value;
    //     const loginPassword = document.querySelector('#login-password').value;

    //     // Add your validation logic here
    //     if (loginUsername === '' || loginPassword === '') {
    //         alert('Please fill in all fields');
    //     } else {
    //         // If validation passes, you can send data to the server for authentication.
    //         // Add your code for authentication here.
    //         alert('Login successful!');
    //         // Redirect to the main page or perform other actions
    //     }
    // });
    function saveData()
    {
        const userName = document.getElementById('userName').value;
        const passWord = document.getElementById('password1').value;
        const rePassword = document.getElementById('password2').value;
        console.log(userName+passWord+rePassword);
    }



    // <script>
    //       function encryptData(data, key) {
    //           const encrypted = CryptoJS.AES.encrypt(data, key);
    //           return encrypted.toString();
    //       }
    //       const signup = document.getElementById("submitSignup").addEventListener("click", function (event) {
    //           event.preventDefault();
    //           saveData();
    //       });

    //       function saveData() {
    //           const userName = document.getElementById('UserName').value;
    //           const passWord = document.getElementById('password1').value;
    //           const rePassword = document.getElementById('password2').value;

    //           if (passWord === rePassword) {
    //               let user_records = JSON.parse(localStorage.getItem("users")) || [];


    //               const encryptedPassword = encryptData(passWord,'your-secret-key');

    //               if (user_records.some((v) => {
    //                   return (v.user === userName)
    //               })) {
    //                   alert("Account Already exists!!");
    //               } else {
    //                   user_records.push({
    //                       "user": UserName,
    //                       "password": encryptedPassword,
    //                   });
    //                   localStorage.setItem("users", JSON.stringify(user_records));
    //                   window.location.href = "login.html";
    //               }
    //           } else {
    //               alert("Password Mismatch!");
    //           }
    //       }
    //   </script>



//     <script>
//        function decryptData(encryptedData, key) {
//     const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
//     return decryptedBytes.toString(CryptoJS.enc.Utf8);
// }

// const login = document.getElementById("submitLogin").addEventListener("click", function (event) {
//     event.preventDefault();
//     validateData();
// });


// function validateData() {
//     const userName = document.getElementById('UserName').value;
//     const passWord = document.getElementById('Password').value;
//     let user_records = JSON.parse(localStorage.getItem("users")) || [];
//     const user = user_records.find((v) => v.user === userName);

//     if (user && decryptData(user.password, 'your-secret-key') === passWord) {
//         alert("Login successful!!!");
//         localStorage.setItem("name", user.user);
//         localStorage.setItem("password", user.password);
//         window.location.href = "tributepage.html";
//     } else {
//         alert("Login failed");
//     }
// }
// </script>
    


