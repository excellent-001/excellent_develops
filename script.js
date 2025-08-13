// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDoTlLIlOyoYiTZLQmzVcDro-cw9TCU9qI",
  authDomain: "excellent-d056e.firebaseapp.com",
  projectId: "excellent-d056e",
  storageBucket: "excellent-d056e.firebasestorage.app",
  messagingSenderId: "629984941607",
  appId: "1:629984941607:web:3d7fc2478f555d45a0e002",
  measurementId: "G-G3RCTDSY27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Switch Forms
document.getElementById("show-signup").onclick = () => {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("signup-box").classList.remove("hidden");
};
document.getElementById("show-login").onclick = () => {
    document.getElementById("signup-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
};

// Signup
document.getElementById("signup-btn").onclick = async () => {
    let firstName = document.getElementById("first-name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (!firstName || !surname || !username || !email || !password || !confirmPassword) {
        alert("Please fill all fields!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        let userCred = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCred.user.uid), {
            firstName,
            surname,
            username,
            email
        });
        alert("Account created! Please login.");
        document.getElementById("show-login").click();
    } catch (error) {
        alert(error.message);
    }
};

// Login
document.getElementById("login-btn").onclick = async () => {
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Please enter email and password!");
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "welcome.html"; // Redirect after successful login
    } catch (error) {
        alert("Incorrect Email or Password");
    }
};

// Logout
if (document.getElementById("logout-btn")) {
    document.getElementById("logout-btn").onclick = async () => {
        await signOut(auth);
        window.location.href = "index.html";
    };
  }
