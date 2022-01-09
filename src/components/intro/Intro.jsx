import React from 'react';
import "./intro.css";
import Me from "./../../img/rj2.png"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
        backDelay:1500,
        backSpeed:60,
        showCursor: true, 
        strings: ['Web Developer', 'and', 'Web Designer', 'Based in Montpellier - France'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img src={Me} alt="Big Boss"/>
        </div>
      </div>                                    {/* fin div Classname = "intro-left" */}
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>HERNANDEZ Raul</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>                                   {/* fin div Classname = "intro-right" */}
        <a href="#portfolio">
          <img src="icon/iconsJAVA240.png" alt="" />
          <img src="icon/iconHTML240.png" alt="" />
          <img src="icon/iconJS240.png" alt="" />
          <img src="icon/iconREACT240.png" alt="" />
          <img src="icon/iconPHP240.png" alt="" />
          <img src="icon/iconSQL240.png" alt="" />
        </a>
      </div>
    </div>
  );
}
