import React, { useState } from "react";
import "../../../public/styles.css";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Popup from "reactjs-popup";
import Login from "../Login/Login";
import Password from "../Login/Password";
import SignupOpt from "../Login/SignupOpt";
import Signup from "../Login/Signup";

const contentStyle = {
  width: "23.125rem",
  height: "22.313rem",
  padding: "0"
};

const contentStylePassword = {
  width: "23.125rem",
  height: "18rem",
  padding: "0"
};

const contentStyleSignupOpt = {
  width: "23.125rem",
  height: "20rem",
  padding: "0"
};

const contentStyleSignup = {
  width: "23.125rem",
  height: "18rem",
  padding: "0"
};

function Header() {
  const [openLogin, setLoginState] = useState(false);
  const [openSignupOpt, setSignupOptState] = useState(false);
  const [openSignup, setSignupState] = useState(false);
  const [openPassword, setPasswordState] = useState(false);

  function loginSignup() {
    closeLoginModal();
    closePasswordModal();
    openSignupOptModal();
  }
  function SignupCreate() {
    closeSignupOptModal();
    openSignupModal();
  }
  function loginCreate() {
    closeSignupOptModal();
    closeSignupModal();
    openLoginModal();
  }

  function emailPassword() {
    closeLoginModal();
    openPasswordModal();
  }
  function openLoginModal() {
    setLoginState(true);
  }

  function closeLoginModal() {
    setLoginState(false);
  }
  function openSignupOptModal() {
    setSignupOptState(true);
  }

  function closeSignupOptModal() {
    setSignupOptState(false);
  }
  function openSignupModal() {
    setSignupState(true);
  }

  function closeSignupModal() {
    setSignupState(false);
  }
  function openPasswordModal() {
    setPasswordState(true);
  }

  function closePasswordModal() {
    setPasswordState(false);
  }
  function onHover(event) {
    event.target.style.borderBottom = "4px solid #222";
  }

  function onHoverOut(event) {
    event.target.style.borderBottom = "4px solid #fff";
  }
  return (
    <div>
      <Navbar className="nav_bar" bg="light" variant="light">
        <Navbar.Brand className="compnay_logo" href="#home">
          Company Name
        </Navbar.Brand>

        {/*<div className="vertical" />*/}
        <Nav.Link onClick={openLoginModal} className="extra_nav">
          Login
        </Nav.Link>

        {/*     Login     */}

        <Popup
          open={openLogin}
          modal
          contentStyle={contentStyle}
          closeOnDocumentClick
          onClose={closeLoginModal}
        >
          <div>
            <Login signupClick={loginSignup} continueClick={emailPassword} />
          </div>
        </Popup>

        <Popup
          open={openPassword}
          modal
          contentStyle={contentStylePassword}
          closeOnDocumentClick
          onClose={closePasswordModal}
        >
          <div>
            <Password signupClick={loginSignup} />
          </div>
        </Popup>

        {/*     Signup Option     */}

        <Popup
          open={openSignupOpt}
          modal
          contentStyle={contentStyleSignupOpt}
          closeOnDocumentClick
          onClose={closeSignupOptModal}
        >
          <div>
            <SignupOpt signupClick={SignupCreate} loginClick={loginCreate} />
          </div>
        </Popup>

        {/*     Signup     */}

        <Popup
          open={openSignup}
          modal
          contentStyle={contentStyleSignup}
          closeOnDocumentClick
          onClose={closeSignupModal}
        >
          <div>
            <Signup loginClick={loginCreate} />
          </div>
        </Popup>

        <Nav.Link className="extra_nav" href="#wishlist">
          <FavoriteBorderIcon />
        </Nav.Link>
        <Nav.Link className="extra_nav" href="#cart">
          <ShoppingCartIcon />
        </Nav.Link>
      </Navbar>

      <Navbar className="nav_bar" id="nav_bar2" variant="light">
        <Nav className="mr-auto">
          <Nav.Link
            onMouseOver={onHover}
            onMouseOut={onHoverOut}
            id="left_button"
            href="#men_section"
          >
            Men
          </Nav.Link>

          <Nav.Link
            onMouseOver={onHover}
            onMouseOut={onHoverOut}
            id="women"
            href="#women_section"
          >
            Women
          </Nav.Link>

          <Nav.Link
            onMouseOver={onHover}
            onMouseOut={onHoverOut}
            id="cups"
            href="#cups_section"
          >
            Cups
          </Nav.Link>

          <Nav.Link
            onMouseOver={onHover}
            onMouseOut={onHoverOut}
            id="caps"
            href="#caps_section"
          >
            Caps
          </Nav.Link>

          <Nav.Link
            onMouseOver={onHover}
            onMouseOut={onHoverOut}
            id="mobileCover"
            href="#mobileCovers_section"
          >
            Mobile Covers
          </Nav.Link>
        </Nav>

        <Form inline className="search_bar">
          <FormControl
            type="text"
            placeholder="Search by product ,category or collection"
            className="search_place"
          />
          <Button id="right_button">
            <SearchIcon />
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
