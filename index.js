import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJDgBhCM_ego87qPqGS1WIcJeJ53NR0Wg",
    authDomain: "hgms-7a41a.firebaseapp.com",
    projectId: "hgms-7a41a",
    storageBucket: "hgms-7a41a.appspot.com",
    messagingSenderId: "485131885885",
    appId: "1:485131885885:web:8255806d132a0b3db43954"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Sign in with email and password
  signInWithEmailAndPassword(getAuth(app), username, password)
    .then(function(userCredential) {
      // Login successful
      sessionStorage.setItem('email', userCredential.user.email);
      // Redirect to the new page
      window.location.href = "newpage.html";
    })
    .catch(function(error) {
      // Error occurred during login
      var errorMessage = error.message;
      alert('Login Invalid');
    });
});
