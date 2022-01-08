import React from 'react';
import "./topbar.css";
import {Person, Mail} from "@material-ui/icons"

const Topbar = ({menuOpen, setMenuOpen}) => {
    return ( 
    <div className={"topbar " + (menuOpen && 'active')}>
        <div className='wrapper'>
            <div className='tb-left'>
                <a href='#intro' className='logo'>RJHB</a>
                <div className="itemContainer">
                    <Person className='tb-icon'/>
                    <span>+ (33) 7 81 60 75 57</span>
                </div>
                <div className="itemContainer">
                    <Mail className='tb-icon'/>
                    <span>rjhb1985@gmail.com</span>
                </div>
            </div>
            <div className='tb-right'>
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