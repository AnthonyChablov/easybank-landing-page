import React, { useEffect, useState } from "react";
const Navigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <div className="nav__logo">
                        <a href="#"><img src={require('../../assets/images/logo.svg').default} alt="logo" /></a>
                        
                    </div>
                    
                    <ul className={click ? "nav__menu active" : "nav__menu"}>
                        <li className='menu__items'><a href="#" className="menu__link">Home</a></li>
                        <li className='menu__items'><a href="#" className="menu__link">About</a></li>
                        <li className='menu__items'><a href="#" className="menu__link">Contact</a></li>
                        <li className='menu__items'><a href="#" className="menu__link">Blog</a></li>
                        <li className='menu__items'><a href="#" className="menu__link">Careers</a></li>
                    </ul>
                    
                    <div className="nav__button">
                        <div className="button__wrapper">
                            Request Invite
                        </div>
                    </div>
                    <div className="nav__hamburger " onClick={handleClick}>
                    <button className='hamburger__button'>
                        {click 
                            ? <img src={require('../../assets/images/icon-close.svg').default} alt="logo"/>    
                            : <img src={require('../../assets/images/icon-hamburger.svg').default} alt="logo"/> 
                        }
                    </button>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;