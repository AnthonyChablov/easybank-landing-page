import mobile from '../../assets/images/bg-intro-mobile.svg';
import desktop from '../../assets/images/bg-intro-desktop.svg';
import mockups from '../../assets/images/image-mockups.png';
const Image = () => {
  return (
    <div className="image">
        
        <img className='image__wrapper' src={mockups} alt="background" />
    </div>
  )
}

export default Image