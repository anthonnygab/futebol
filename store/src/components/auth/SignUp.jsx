import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/SignUp.css';

export default function SignUp() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.find((u) => u.email === form.email);
    if (userExists) {
      alert("Usuário já cadastrado!");
      return;
    }

    existingUsers.push(form);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Conta criada com sucesso!");
    navigate("/login"); // Redireciona para login
  };

  return (
    <div id='signUpForm'>
       <button 
          onClick={() => navigate("/")}
          id='signUpBackBtn'
          >
          ←
       </button>
       <div className="form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="formInput"
          />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Sua Senha"
            value={form.password}
            onChange={handleChange}
            required
            className="formInput"
          />
          <br />

          <button type="submit" id="createBtn">Criar Conta</button>
        </form>
        <p id="yeahAccount">
          Já tem conta?{" "}
          <button
            onClick={() => navigate("/login")}
            id="backAccount"
          >
            Entrar
          </button>
        </p>
       </div>
    </div>
  )
}