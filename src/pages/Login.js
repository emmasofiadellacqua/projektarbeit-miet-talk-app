import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase.js";
import './Login.css';
import { AuthContext } from "../Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/homepage");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/homepage" />;
  }

  return (
    
    <section className="container_login">
     <div className="div_login">
      <h1 className="h1_login">EINLOGGEN</h1>
      <form className="form_login" onSubmit={handleLogin}>
        <label className="label_login">
          E-Mail
          <input className="input_login" name="email" type="email"/>
        </label>
        <label className="label_login">
          Passwort
          <input className="input_login" name="password" type="password"/>
        </label>
        <button className="button_login" type="submit">Einloggen</button>
      </form>
      <p className="p_login">Passwort vergessen?</p>
    </div>
    </section>
         );
};

export default withRouter(Login);