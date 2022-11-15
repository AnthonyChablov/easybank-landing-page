
const Navigation = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <div className="nav__logo">
                        <img src={require('../../assets/images/logo.svg').default} alt="logo" />
                    </div>
                    <div className="nav__menu">
                        <ul className="menu__items">
                            <li className='items__list'><a href="#">Home</a></li>
                            <li className='items__list'><a href="#">About</a></li>
                            <li className='items__list'><a href="#">Contact</a></li>
                            <li className='items__list'><a href="#">Blog</a></li>
                            <li className='items__list'><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="nav__button">
                        <div className="button__wrapper">
                            Request Invite
                        </div>
                    </div>
                    <div className="nav__hamburger">
                        <button className='hamburger__button'>
                            <img src={require('../../assets/images/icon-hamburger.svg').default} alt="logo" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;