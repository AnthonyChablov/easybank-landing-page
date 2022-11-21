import Image from "../Image/Image";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

const hero = () => {
  return (
    <div className='hero '>
        <div className="hero__wrapper ">
            <div className="hero__img ">
                <Image type={'bg'}/>
            </div>
            
            <div className="hero__content ">
                <div className="content__wrapper">
                    <div className="content__header">
                        <Header text={'Next generation digital banking'}/>
                    </div>
                    <div className="content__paragraph">
                        <Paragraph text={'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more'}/>
                    </div>
                    <div className="content__button">
                        <Button content={'Request Invite'}/>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default hero