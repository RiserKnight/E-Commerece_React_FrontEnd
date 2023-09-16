import React, { useState } from "react";
import Popup from "reactjs-popup";
import Login from "./Login/Login";

const contentStyle = {
  height: "400px",
  maxWidth: "600px",
  width: "90%"
};

function Test() {
  const [open, setState] = useState(false);

  function openModal() {
    setState(true);
  }

  function closeModal() {
    setState(false);
  }

  return (
    <div>
      <button onClick={openModal}>Controlled Popup0</button>
      <Popup open={open} modal contentStyle={contentStyle}>
        <div>
          <Login />
          <button onClick={closeModal}> ***** </button>
        </div>
      </Popup>
    </div>
  );
}

export default Test;
