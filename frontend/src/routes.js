<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 91d697a83f3ca06da025911d6b567bbc566ca545
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
<<<<<<< HEAD
import Signup from "./pages/Signup";


=======
>>>>>>> 91d697a83f3ca06da025911d6b567bbc566ca545

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/signup" element={<Signup />} />
=======
>>>>>>> 91d697a83f3ca06da025911d6b567bbc566ca545
      </Routes>
    </Router>
  );
}

export default AppRoutes;
