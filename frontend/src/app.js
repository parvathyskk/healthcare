// import React from "react";
// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// //import Consultation from "./pages/Consultation";

// // Firebase configuration (replace with your actual config)
// const firebaseConfig = {
//   apiKey: "AIzaSyCY8Ie3NaNjDwGx-ubO8UWepeaAbq_095o",
//   authDomain: "healthcare-7833c.firebaseapp.com",
//   projectId: "healthcare-7833c",
//   storageBucket: "healthcare-7833c.appspot.com",
//   messagingSenderId: "33245263047",
//   appId: "1:33245263047:web:d2876face947d021477ae2",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);





// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// // Export authentication functions
// export { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
