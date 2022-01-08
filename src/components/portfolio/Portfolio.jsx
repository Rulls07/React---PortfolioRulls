import React, { useEffect, useState } from "react";
import "./portfolio.css";
import { liste } from "./../data/listeData";
import { html, javascript, java, php, bdd, } from "./../data/projetsData";
import PortfolioList from "../portfolioList/PortfolioList";

const Portfolio = () => {
  const [selected, setSelected] = useState("html");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "html":
        setData(html);
        break;
      case "javascript":
        setData(javascript);
        break;
      case "java":
        setData(java);
        break;
      case "php":
        setData(php);
        break;
      case "bdd":
        setData(bdd);
        break;
      default:
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {liste.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            activePortfolio={selected === item.id}
            setSelected={setSelected}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container-projets">
      {data.map((projet) => (
        <div className="projets-item" key={projet.id}>
            <img src={projet.img} 
                 alt='' 
                 />
            <h3>{projet.title}</h3>
        </div>
     ))}
         
      </div>
    </div>
  );
};

export default Portfolio;
