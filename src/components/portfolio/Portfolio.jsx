import React, { useState } from 'react';
import "./portfolio.css";
import {liste} from "./../data/listeData";
import PortfolioList from '../portfolioList/PortfolioList';
// import {Test} from "../../img-works/animal1.png";
const Portfolio = () => {
    const [selected,setSelected] = useState("all");
    return ( 
    <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
        {liste.map((item)=> <PortfolioList 
                            id={item.id} 
                            title={item.title} 
                            activePortfolio={selected === item.id} 
                            setSelected={setSelected}
                            key={item.id}/>)}
                            
        </ul>
        <div className="container-projets">
            <div className="projets-item">
                <img src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt='test'/>
                <h3>Banking App</h3>
            </div>
            <div className="projets-item">
                <img src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt='test'/>
                <h3>Banking App</h3>
            </div>
            <div className="projets-item">
                <img src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt='test'/>
                <h3>Banking App</h3>
            </div>
            <div className="projets-item">
                <img src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt='test'/>
                <h3>Banking App</h3>
            </div>
            <div className="projets-item">
                <img src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt='test'/>
                <h3>Banking App</h3>
            </div>
            <div className="projets-item">
                <img src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt='test'/>
                <h3>Banking App</h3>
            </div>
        </div>
    </div> );
}
 
export default Portfolio
