import React from "react";
import "../../../public/loginStyles.css";

function Signup(props) {
  function prevPop() {
    props.loginClick();
  }

  function handleText(event) {
    event.target.style.color = "#222";
  }

  function handlePass(event) {
    event.target.style.color = "#222";
    event.target.type = "password";
  }

  return (
    <div className="signup-box">
      <h3 id="main">Sign Up</h3>

      <input
        type="text"
        id="email_mob"
        name="username"
        placeholder="Full Name"
        onChange={handleText}
      />

      <input
        type="text"
        id="email_mob"
        name="username"
        placeholder="Email/Mobile No."
        onChange={handleText}
      />

      <input
        type="text"
        id="email_mob"
        name="username"
        placeholder="Password"
        onChange={handlePass}
      />

      <button id="continue">Sign Up</button>
      <div>
        <p id="new_user">
          Have a account?{"  "}
          <span onClick={prevPop} id="sign_up">
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
