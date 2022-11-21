
import mockups from '../../assets/images/image-mockups.png';

import currency from '../../assets/images/image-currency.jpg';
import confetti from '../../assets/images/image-confetti.jpg';
import plane from '../../assets/images/image-plane.jpg';
import restaurant from '../../assets/images/image-restaurant.jpg';
import {motion} from "framer-motion"
const transition = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };

const Image = ({type, imgName}) => {
  /* hero */
  if (type === 'bg'){
    return (
      <div className="image--bg">
        <div className="image--bg__wrapper">
          <div className="container">
            <motion.img className='' src={mockups} alt="background" 
              initial={{
                filter:'opacity(0%)'
              }}
              animate={{
                  filter:'opacity(100%)',
                  transition :{delay : 0.2, ...transition}
              }}
            />
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
          } alt="bg" />
      </div>
    )
  }
}

export default Image