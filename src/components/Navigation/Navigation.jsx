import React, { useEffect, useState } from "react";
const Navigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <div className="nav__logo">
                        <img src={require('../../assets/images/logo.svg').default} alt="logo" />
                    </div>
                    
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='items__list'><a href="#">Home</a></li>
                            <li className='items__list'><a href="#">About</a></li>
                            <li className='items__list'><a href="#">Contact</a></li>
                            <li className='items__list'><a href="#">Blog</a></li>
                            <li className='items__list'><a href="#">Careers</a></li>
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