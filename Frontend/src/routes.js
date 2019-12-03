import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastrar";
import Recuperar from "./pages/RecuperarAcesso";
import Principal from "./pages/Principal";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("Usuario/token") ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />

      <Route path="/cadastrar" component={Cadastro} />

      <Route path="/recuperar" component={Recuperar} />

      <Route path="/principal" componenet={Principal} />
      </Switch>
    </BrowserRouter>
  );
}
