import React from "react";

const LoginSetup = ({ setLoginOption, loginOption }) => {
  
  const loginSelect = (e) => {
    if (e.target.id === "signup") {
      setLoginOption(false);
    } else {
      setLoginOption(true);
    }
  };

  return (
    <div className="login_setup">
      <div
        className={loginOption ? "login_setup--btn" : "login_setup--btn select"}
        onClick={loginSelect}
        id="signup"
      >
        S'inscrire
      </div>

      <div
        className={loginOption ? "login_setup--btn select" : "login_setup--btn"}
        onClick={loginSelect}
        id="login"
      >
        Se connecter
      </div>
    </div>
  );
};

export default LoginSetup;
