import React, { useState, useEffect } from "react";
import "./main.css";

function Main() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [allImages, setAllImages] = useState("");
  const [randomImg, setRandomImg] = useState("");

  useEffect(() => {
    async function fetchingImages() {
      console.log("asd");
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllImages(data.data.memes);
      setRandomImage();
    }
    fetchingImages();
  }, []);

  const setRandomImage = () => {
    const randomNum = Math.floor(Math.random() * 99);
    setRandomImg(allImages[randomNum].url);
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 99);
    if (allImages) {
      setRandomImg(allImages[randomNumber].url);
    }
  }, [allImages]);

  return (
    <div className="head-container">
      <div className="input-container">
        <input
          placeholder="top text"
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          placeholder="bottom text"
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
      <button className="button" onClick={setRandomImage}>
        Get a new meme image
      </button>
      <div className="image-container">
        {topText && <h2 className="topText meme-text">{topText}</h2>}
        {bottomText && <h2 className="bottomText meme-text">{bottomText}</h2>}
        <img className="image" src={randomImg} />
      </div>
    </div>
  );
}

export default Main;
