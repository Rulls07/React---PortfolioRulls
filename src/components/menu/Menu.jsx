import React from 'react';
import "./menu.css";

const Menu = ({menuOpen, setMenuOpen}) => {
    return (  
        <div className={"menu " + (menuOpen && 'active')}>
            <ul className='menuHamburguer'>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#intro">home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#portfolio">portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#works">works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#resume">resume</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#contact">contact</a>
                </li>
            </ul>
        </div>
    );
}
 
export default Menu;