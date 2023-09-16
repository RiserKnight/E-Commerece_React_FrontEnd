import React from "react";
import "../../../public/loginStyles.css";

function Password(props) {
  function handlePass(event) {
    event.target.style.color = "#222";
    event.target.type = "password";
  }

  function prevPop() {
    props.signupClick();
  }

  return (
    <div className="password-box">
      <h3 id="main">Log In</h3>
      <h3 id="sub">Follow the trend!</h3>
      <p id="login_user">Hey Mr. blah blah</p>

      <input
        type="text"
        id="email_mob"
        name="username"
        placeholder="Password"
        onChange={handlePass}
      />

      <button id="continue" type="submit">
        Continue
      </button>

      <div>
        <p id="new_user">
          New to Company Name?{" "}
          <span onClick={prevPop} id="sign_up">
            SIGN UP
          </span>
        </p>
      </div>
    </div>
  );
}

export default Password;
