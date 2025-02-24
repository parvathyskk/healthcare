import React from "react";
import AppRoutes from "./routes";
import { db } from "./firebase"; // Import Firestore database
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

function App() {
  const addData = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: "John Doe",
        email: "johndoe@example.com",
      });
      console.log("Data added successfully!");
    } catch (error) {
      console.error("Error adding data: ", error);
    }
    return (
      <div>
        <h1>Healthcare App</h1>
        <button onClick={addData}>Add Data to Firestore</button>
      </div>
    );
}
}

export default App;
