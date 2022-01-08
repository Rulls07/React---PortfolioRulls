import React from 'react';
import "./portfolioList.css";

const PortfolioList = ({id,title,activePortfolio,setSelected}) => {
    return ( 
    <li className={activePortfolio ? 'portfolioList activePortfolio' : 'portfolioList'} onClick={()=>setSelected(id)}>{title} </li>);
}
 
export default PortfolioList;