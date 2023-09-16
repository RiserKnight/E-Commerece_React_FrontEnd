import React from "react";
import "../../../public/loginStyles.css";

function SignupOpt(props) {
  function prevPop() {
    props.signupClick();
  }
  function prevPop1() {
    props.loginClick();
  }
  return (
    <div className="signupopt-box">
      <h3 id="main">Sign Up</h3>
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
      <button id="signup_acc" onClick={prevPop}>
        Create account
      </button>
      <div>
        <p id="new_user">
          Have a account?
          <span id="sign_up" onClick={prevPop1}>
            {" "}
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupOpt;
