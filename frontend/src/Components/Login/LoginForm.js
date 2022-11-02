import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { GET_USER } from "../../SliceReducers/slice.user";

const LoginForm = ({
  setLoginOption,
  loginOption,
  setConnectId,
  connectId,
  setErrorMsg,
}) => {
  // Variables init
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const dispatch=useDispatch();

  // Events
  const emailChange = (e) => {
    setEmail(e.target.value);
    setErrorMsg("");
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    setErrorMsg("");
  };

  const validHandle = () => {
    console.log("loginOption", loginOption);
    //
    // Signup logic
    //
    if (!loginOption) {
      const newUser = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };
      console.log(newUser);
      async function fetchNewUser() {
        try {
          const reponse = await fetch(
            `${process.env.REACT_APP_API_USER}/signup`,
            {
              method: "POST",
              body: JSON.stringify(newUser),
              headers: { "Content-Type": "application/json" },
            }
          );
          console.log("reponse: ", reponse.ok);
          if (!reponse.ok) {
            setErrorMsg(true);
          } else {
            setLoginOption(true);
          }
        } catch (error) {
          console.log("Fetch new user error: ", error);
        }
      }
      fetchNewUser();
    } else {
      //
      // Login logic
      //
      async function fetchLoginUser() {
        const userData = {
          email: email,
          password: password,
        };
        const reponse = await fetch(`${process.env.REACT_APP_API_USER}/login`, {
          method: "POST",
          body: JSON.stringify(userData),
          headers: { "Content-Type": "application/json" },
        });
        if (!reponse.ok) {
          setErrorMsg(true);
        } else {
          const reponseJSON = await reponse.json();
          setConnectId(reponseJSON);

          const user = await fetch(`${process.env.REACT_APP_API_USER}/${reponseJSON}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
          })
  
          const userJSON = await user.json();
          console.log('reponse userJson: ',userJSON)
  
          dispatch(GET_USER(JSON.parse(JSON.stringify(userJSON.userData)))) 

          navigate("/Home");
        }
      }
      fetchLoginUser();
    }
  };

  return (
    <div className="login_form">
      <form action="" name="login" onSubmit={validHandle}>
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
        <br />

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
        <br />

        {!loginOption ? (
          <>
            <label htmlFor="firsname">Prénom:</label>
            <br />
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              required
              className="login_form--input"
            />
            <br />
          </>
        ) : (
          ""
        )}

        {!loginOption ? (
          <>
            <label htmlFor="lastname">Nom:</label>
            <br />
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
              required
              className="login_form--input"
            />
            <br />
          </>
        ) : (
          ""
        )}
        <div className="login_form--submit" onClick={validHandle}>
          VALIDER
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
