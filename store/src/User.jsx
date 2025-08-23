import React, { useState } from "react";
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import '../../store/src/styles/Login.css';

export default function User() {
      const [currentPage, setCurrentPage] = useState("login")

      return (
        <div>
            {currentPage === "login" && (
                <Login 
                   goToSignup={() => setCurrentPage("signup")}
                   goBackHome={() => window.location.href = "../src/components/home/Navbar.jsx"}                
                   />
            )}

            {currentPage === "signup" && (
                <SignUp 
                   goToLogin={() => setCurrentPage ("login")}
                   goBackHome={() => window.location.href = "../src/components/home/Navbar.jsx"} 
                />
            )}
        </div>
      );
}
