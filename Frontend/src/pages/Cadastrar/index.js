
import React, { useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Cadastrar({ history }) {
  const [nome, setNome] = new useState("")
  const [email, setEmail] = new useState("")
  const [senha, setSenha] = new useState("")
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const user = {
        nome,
        email,
        senha
      }
      await api.post("/usuario", user);
      history.push("/")
    } catch (erro) {
      console.log("Erro ao Cadastrar", erro);
    }
  }
  return (
    <Container>
      <section>
        <form onSubmit={handleSubmit}>
          <p>Cadastrar</p>
          <br />
          <input placeholder="Nome" type="Name" value={nome} onChange={(event) => setNome(event.target.value)} required />
          <input placeholder="Email" type="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <input placeholder="Senha" type="Password" value={senha} onChange={(event) => setSenha(event.target.value)} required />
          <br />
          <button className="botoes" type="submit"> Salvar </button>
          <br />
          <Link to="/">
            <label className="Logar" htmlFor="login"> Gostaria de logar? </label>
          </Link>
        </form>
      </section>
    </Container>
  );
}
