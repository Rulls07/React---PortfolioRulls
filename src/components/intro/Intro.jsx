import React, { useEffect, useRef } from "react";
import { init } from 'ityped';
import "./intro.css";
import Me from "./../../img/rj2.png"
import {ExpandMore} from '@material-ui/icons';


const Intro = () => {
    const textref = useRef();
    useEffect(() => {
        // console.log(textref); 
        init(textref.current, { 
            backDelay:1500,
            backSpeed:60,
            showCursor: true, 
            strings: ['Web Developer', 'and', 'web Designer', 'based in France - Montpellier'] }) ;
    }, [])
  return (
    <div className="intro" id="intro">
        <div className="intro-left">
            <div className="imgContainer">
                <img src={Me} alt="Big Boss"/>
            </div>
        </div>                                    {/* fin div Classname = "i-left" */}
        <div className="intro-right">             {/* fin div Classname = "i-right" */}
            <div className="intro-wrapper">
                <h2 className="nomH2">Hello, I'm</h2>
                <h1 className="titleH1">HERNANDEZ Raul</h1>
                <span ref={textref}></span>
            </div>
            <a href="#portfolio">
                <ExpandMore className="intro-icon"/>
                <ExpandMore className="intro-icon"/>
                
                {/* <img src={Down} alt="Portfolio"/> */}
            </a>
        </div>
    </div>
  );
};

export default Intro;
