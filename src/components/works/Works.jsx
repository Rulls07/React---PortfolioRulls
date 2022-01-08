import React from "react";
import "./works.css";
import { Test } from "./../../img/mobile.png";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="sliderWorks">
        <div className="containerSlider">
          <div className="sliderItem">
            <div className="s-left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={Test} alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta molestiae, magnam quasi ad consequatur
                </p>
                <span>Projets</span>
              </div>
            </div>
            <div className="s-right">
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                    alt=""
                    />
            </div>
          </div>
        </div>
      </div>
      <img src="img/arrow.png" className="arrow left" alt=""/>
      <img src="../../../img/arrow.png" className="arrow right" alt=""/>
    </div>
  );
};

export default Works;
