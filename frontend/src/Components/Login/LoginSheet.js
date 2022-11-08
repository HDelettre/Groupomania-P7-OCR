import React, { useState } from "react";

// Importation des composants
import LoginSetup from "./LoginSetup_old";
import LoginForm from "./LoginForm";
import Header from "../Header/Header";
import LoginError from "./LoginError";

const LoginSheet = ({ setConnectId }) => {
  const [loginOption, setLoginOption] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  return (
    <>
      <Header />

      <div className="login">
        <LoginSetup setLoginOption={setLoginOption} loginOption={loginOption} />

        <LoginForm
          setLoginOption={setLoginOption}
          loginOption={loginOption}
          setConnectId={setConnectId}
          setErrorMsg={setErrorMsg}
        />
      </div>

      {errorMsg ? <LoginError /> : ""}
    </>
  );
};

export default LoginSheet;
