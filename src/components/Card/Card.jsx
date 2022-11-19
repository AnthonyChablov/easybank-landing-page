import Image from "../Image/Image"
const Card = ({imgName,author, header,text }) => {
  return (
    <div className='card'>
      <div className="card__wrapper ">
        <a href="#">
          <div className="card__img">
            <Image 
              imgName={imgName} 
              author={author} 
              header={header} 
              text={text}
            />
          </div>
          <div className="card__content">
            <div className="card__author">
              <p>{`By ${author}`}</p>
            </div>
            <div className="card__header">
              <p>{`${header}`}</p>
            </div>
            <div className="card__text">
              <p>{`${text}`}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Card