import Icon from '../Icon/Icon'
import Button from '../Button/Button';
const Footer = () => {
    const iconData = [
        {iconName:'facebook', link:'#'},
        {iconName:'youtube', link:'#'},
        {iconName:'twitter', link:'#'},
        {iconName:'pinterest', link:'#'},
        {iconName:'instagram', link:'#'}
    ];
    const linkData = [
        {linkName:'About Us', link:'#'},
        {linkName:'Contact', link:'#'},
        {linkName:'Blog', link:'#'},
        {linkName:'Careers', link:'#'},
        {linkName:'Support', link:'#'},
        {linkName:'Privacy Policy', link:'#'}
    ];
    return (
        <div className="footer">
            <div className="footer__wrapper container">
                <div className="footer__img">
                    <a href="#"><img src={require('../../assets/images/logo-flipped.svg').default} alt="logo" /></a>
                </div>
                <div className="footer__icons">
                    {iconData.map((social)=>( 
                        <div className="icons__link">
                            <a href={social.link}><Icon iconName={social.iconName}/></a>
                        </div>
                    ))}
                </div>
                <div className="footer__links">
                    {linkData.map((link)=>( 
                        <div className="links__routes">
                            <a href={link.link}>{link.linkName}</a>
                        </div>
                    ))}
                </div>
                <div className="footer__button">
                    <Button content={'Request Invite'}/>
                </div>
                <div className="footer__copyright">
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer