import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFDyRXi4L2PnizWKh8aAcyjXsj64xlgFE",
  authDomain: "datadiscovery-a71a7.firebaseapp.com",
  projectId: "datadiscovery-a71a7",
  storageBucket: "datadiscovery-a71a7.firebasestorage.app",
  messagingSenderId: "779761115781",
  appId: "1:779761115781:web:6dbf44d805e09eff147fec",
  measurementId: "G-LYMBKTCS1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Now properly defined
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User:", result.user);
      const user = result.user;
      console.log("Responsse from google ",user)
  
      // Send user details to backend for MongoDB storage
      const response = await fetch("http://localhost:8000/users/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: user.displayName,
          email: user.email,
          avatar : user.photoURL
        }),
        credentials: "include"
      });
      console.log("Response: from api login with google",response)
      console.log();
      const data = await response.json();
      console.log("This is data", data)
      localStorage.setItem('token',data.accessToken)
      return data; // This will contain user info from MongoDB
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export { auth, signInWithGoogle, signInWithEmail };
