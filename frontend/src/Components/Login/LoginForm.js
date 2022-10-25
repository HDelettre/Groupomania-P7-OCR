import React, { useState } from "react";

const LoginForm = () => {
    // Variables init 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Events
  const emailChange = () => {};

  const passwordChange = () => {};

  return (
    <div className="login_form">
      <form action="" name="login">
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          onChange={emailChange}
          value={email}
          required
          placeholder="xxxxxx.yyyyy@mail.com"
          className="login_form--input"
        />
        <br/>

        <label htmlFor="password">Mot de passe:</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={passwordChange}
          value={password}
          required
          placeholder="8 caractères minimum"
          className="login_form--input"
        />
        <br/>

        <label htmlFor="firsname">Prénom:</label>
        <br />
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={ (event) => setFirstName(event.target.value) }
          value={firstName}
          required
          className="login_form--input"
        />
        <br/>

        <label htmlFor="lastname">Nom:</label>
        <br />
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={ (event) => setLastName(event.target.value) }
          value={lastName}
          required
          className="login_form--input"
        /><br/>

        <input type = "submit" value = "VALIDER" className = "login_form--submit" />
      </form>
    </div>
  );
};

export default LoginForm;
