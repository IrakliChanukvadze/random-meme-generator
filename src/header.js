import React from "react";
import memePic from "./assets/troll-face.png";
import "./header.css";
function Header() {
  return (
    <div className="heading">
      <img src={memePic} className="meme-logo" />
      <p className="heading-title">Meme Generator</p>
    </div>
  );
}

export default Header;
