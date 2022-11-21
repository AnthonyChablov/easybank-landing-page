import mobile from '../../assets/images/bg-intro-mobile.svg';
import desktop from '../../assets/images/bg-intro-desktop.svg';
import mockups from '../../assets/images/image-mockups.png';

import currency from '../../assets/images/image-currency.jpg';
import confetti from '../../assets/images/image-confetti.jpg';
import plane from '../../assets/images/image-plane.jpg';
import restaurant from '../../assets/images/image-restaurant.jpg';

const Image = ({type, imgName}) => {
  /* hero */
  if (type === 'bg'){
    return (
      <div className="image--bg">
        <div className="image--bg__wrapper">
          <div className="container">
            <img className='' src={mockups} alt="background" />
          </div>
        </div>
      </div>
    )

  /* icons */
  }else{
    return (
      <div className="image">
          <img className='image__wrapper' src={
            {
              currency: currency,
              confetti: confetti,
              plane:plane,
              restaurant:restaurant,
            }[imgName]
          } alt="article-image" />
      </div>
    )
  }
}

export default Image