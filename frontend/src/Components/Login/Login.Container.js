import React, { useState } from "react";

// Import Components
import Header from "../Header/Header";
import LoginForm from "./Login.Form";
import LoginSetup from "./Login.Setup";

const LoginContainer = () => {
  // loginOption: false = signup, true=login
  const [loginOption, setLoginOption] = useState(false);
  // ErrorMsg : détecte si une erreur survient lors de la connection
  const [errorMsg, setErrorMsg] = useState(false);

  return (
    <>
      <Header />

      <div className="login">
        <LoginSetup
          setLoginOption={setLoginOption}
          loginOption={loginOption}
          setErrorMsg={setErrorMsg}
        />

        <LoginForm
          setLoginOption={setLoginOption}
          loginOption={loginOption}
          setErrorMsg={setErrorMsg}
        />
      </div>

      {errorMsg ? (
        <div className="login_error">
          'Veuillez vérifier les informations saisies !'
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoginContainer;
