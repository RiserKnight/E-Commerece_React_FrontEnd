import React from "react";
import "../../../public/loginStyles.css";

function Login(props) {
  function handleText(event) {
    event.target.style.color = "#222";
  }

  function prevPop() {
    props.signupClick();
  }

  function prevPop1() {
    props.continueClick();
  }
  return (
    <div className="login-box">
      <h3 id="main">Log In</h3>
      <h3 id="sub">Follow the trend!</h3>
      <p id="login_para">One step away from joining Company name family</p>

      <div className="logo-buttons">
        <button className="altLogin" id="fb_button">
          <img
            alt="Facebook logo"
            id="fb_logo"
            className="logo_img"
            src="https://images.bewakoof.com/web/facebook-2x-1558356034.png"
          />
          Facebook
        </button>
        <button className="altLogin" id="g_button">
          <img
            alt="Gmail logo"
            id="gmail_logo"
            className="logo_img"
            src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"
          />
          Google
        </button>
      </div>

      <div>
        <hr id="line" />
        <span id="or">or</span>
      </div>

      <input
        type="text"
        id="email_mob"
        name="username"
        placeholder="Email/Mobile No."
        onChange={handleText}
      />

      <button onClick={prevPop1} id="continue" type="submit">
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

export default Login;
