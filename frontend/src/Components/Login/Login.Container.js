import React, { useState } from "react";

// Import Components
import LoginForm from "./Login.Form";
import LoginSetup from "./Login.Setup";

const LoginContainer = () => {
  // loginOption: false => signup, true => login
  const [loginOption, setLoginOption] = useState(false);
  // ErrorMsg : détecte si une erreur survient lors de la connection
  const [errorMsg, setErrorMsg] = useState(false);
  // CreateMsg : Annonce la réussite de la création du compte
  const [createMsg, setCreateMsg] = useState('');

  return (
    <>
      <div className="login">
        <LoginSetup
          setLoginOption={setLoginOption}
          loginOption={loginOption}
          setErrorMsg={setErrorMsg}
          setCreateMsg={setCreateMsg}
        />

        <LoginForm
          setLoginOption={setLoginOption}
          loginOption={loginOption}
          setErrorMsg={setErrorMsg}
          setCreateMsg={setCreateMsg}
        />
      </div>

      {createMsg ? (
        <div className="login_message">
          {createMsg}
        </div>
      ) : (
        ""
      )}

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
