import React from 'react';
import { useState } from "react";
import { data } from "./../data/worksData";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import "./works.css";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" key={d.id}/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.link} target="_blank" className='veilleTech'>Veille Technologique</a></span>
                </div>
              </div>
              <div className="right">
                <img
                //   src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  src={d.img}
                  alt="Veille Tech"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos
        className="work-arrowLeft"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos
        className="work-arrowRight"
        onClick={() => handleClick()}
      />
    </div>
  );
}