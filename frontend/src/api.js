import React from "react";
export const sendMessageToChatbot = async (message) => {
    const response = await fetch("http://127.0.0.1:8000/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    
    const data = await response.json();
    return data.response;
  };
  
  export const registerUser = async (email, password) => {
    const response = await fetch("http://127.0.0.1:8000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    
    return await response.json();
  };
  