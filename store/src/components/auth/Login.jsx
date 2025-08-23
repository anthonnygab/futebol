import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Login.css';

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = existingUsers.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      alert("Login Realizado com Sucesso");
    } else {
      alert("E-mail ou senha inválidos! ");
    }
  };

  return (
    <div id="formularioBack">
      {/* Botão voltar */}
      <button id="backButton" onClick={() => navigate("/")}>
        ←
      </button>

      <div className="formulario">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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

          <button type="submit" id="goIn">Entrar</button>
        </form>
        <p id="noAccount">
          Ainda não tem conta?{" "}
          <button
            onClick={() => navigate("/signup")}
            id="createAccount"
          >
            Criar Conta
          </button>
        </p>
      </div>
    </div>
  );
}
