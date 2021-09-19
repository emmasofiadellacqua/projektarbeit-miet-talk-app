import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import './SignUp.css';
import {Link} from 'react-router-dom';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/homepage");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <section className="container_login">
     <div className="div_login">
      <h1 className="h1_login">ANMELDEN</h1>
      <form className="form_login" onSubmit={handleSignUp}>
        <label className="label_login">
          E-Mail
          <input className="input_login" name="email" type="email"/>
        </label>
        <label className="label_login">
          Passwort
          <input className="input_login" name="password" type="password"/>
        </label>
        <button className="button_login" type="submit">Anmelden</button>
      </form>
      <div className="link_login">
      <Link to='/Login'>Zum Login</Link>
      </div>
    </div>
    </section>
  );
};

export default withRouter(SignUp);