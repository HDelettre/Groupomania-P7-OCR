import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import sliceReducer
import { GET_USER } from '../../SliceReducers/slice.user';

const LoginForm = ({ setLoginOption, loginOption, setErrorMsg, setCreateMsg }) => {

  useEffect(() => {
    formCleanUp()
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // initialisation variables de connection
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const formCleanUp = () => {
    document.getElementById("loginform").reset();
    const loginFotmLength = document.getElementById("loginform").length;
    for (let i=0; i<loginFotmLength; i++) {
      document.getElementById("loginform")[i].value=''
    }
  }

  // gestion des événements
  const emailChange = (e) => {
    setEmail(e.target.value);
    setErrorMsg(false);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    setErrorMsg(false);
  };

  const firstNameHandle = (e) => {
    setFirstName(e.target.value);
    setErrorMsg(false);
    
  }

  const lastNameHandle = (e) => {
    setLastName(e.target.value);
    setErrorMsg(false);
  }

  // validation du formulaire
  const validHandle = () => {
    if (loginOption) {
      login();
    } else {
      signup();
    }
  };

  // fonction login
  async function login() {
    const userData = {
      email: email,
      password: password,
    };
    try {
      const reponse = await fetch(`${process.env.REACT_APP_API_USER}/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" }
      });

      if (reponse.ok) {
        const reponseJSON = await reponse.json();
        const connectId = JSON.parse(JSON.stringify(reponseJSON))
        fetchUserData(connectId);
        setCreateMsg('');
        navigate('/Home');
      } else {
        setErrorMsg(true);
      }
    }
    catch (error) { console.log('Error during userDataLoading: ', error)}
  }

  // fonction signup
  async function signup() {
    const newUser = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    try {
      const reponse = await fetch(`${process.env.REACT_APP_API_USER}/signup`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });

      if (reponse.ok) {
        console.log("Reponse Fetch Signup: ", reponse);
        setLoginOption(true);
        setCreateMsg('Votre compte a été créé avec succès! Vous pouvez maintenant vous connecter.');
        setErrorMsg(false);
      } else {
        setErrorMsg(true);
      }

    } catch (error) {
      console.log(error);
      setErrorMsg(true);
    }
  }

  // Loading User data
  async function fetchUserData(connectId) {
    const userData = await fetch(`${process.env.REACT_APP_API_USER}/${connectId}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })

    const userDataJSON = await userData.json();    

    dispatch(GET_USER(JSON.parse(JSON.stringify(userDataJSON.data))));
  }

  return (
    <>
      <form
        action=""
        name="login"
        className="login_form"
        id='loginform'
        onSubmit={validHandle}
      >
        <label htmlFor="email">Email:</label>

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

            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={firstNameHandle}
              value={firstName}
              required
              className="login_form--input"
              placeholder="Prénom"
            />
            <br />

            <label htmlFor="lastname">Nom:</label>

            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={lastNameHandle}
              value={lastName}
              required
              className="login_form--input"
              placeholder="Nom"
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
    </>
  );
};

export default LoginForm;
