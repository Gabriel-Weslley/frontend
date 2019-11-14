import React from "react";

import { Container } from "./styles";
import {Link} from "react-router-dom";
export default function Recuperar() {
  return (
    <Container>
        <section>
          <br/><br/><br/>
          <p>Recuperar Acesso</p>
        <br/>
            <h2>Digite o email cadastrado nesta conta, enviaremos sua nova senha!</h2>
            <input placeholder= "Email" type = "Email"/>
            <br/>
            <button className = "botoes">Enviar</button>
            <br/><br/>
            <Link to= "/"> 
          <label className= "Logar" htmlFor= "login">  Deseja Logar? </label>
          </Link>
        </section>
    </Container>
  );
}