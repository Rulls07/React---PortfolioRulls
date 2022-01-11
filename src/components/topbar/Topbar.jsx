import React from 'react';
import "./topbar.css";
import {Person, Mail} from "@material-ui/icons";
import Me from "./../../img/raul.png"

const Topbar = ({menuOpen, setMenuOpen}) => {
    return ( 
    <div className={"topbar " + (menuOpen && 'active')}>
        <div className='wrapper'>
            <div className='tb-left'>
                <a href='#intro' className='logo'>RJHB</a>
                <div className="itemContainer">
                    {/* <Person className='tb-icon'/> */}
                    <img src={Me} alt='yo' className='tb-imgRj'/>

                    <span>HERNANDEZ Raul</span>
                </div>
                {/* <div className="itemContainer">
                    <Mail className='tb-icon'/>
                    <span>rjhb1985@gmail.com</span>
                </div> */}
            </div>
            <div className='tb-right'>
            <div className="itemContainer">
                    <Mail className='tb-icon'/>
                    <span className='tb-mrigth'>rjhb1985@gmail.com</span>
                </div>
                <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Topbar;