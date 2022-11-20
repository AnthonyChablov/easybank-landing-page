import SubHeader from "../SubHeader/SubHeader";
import Card from "../Card/Card";
const Articles = () => {
  const data = [
    {
      imgName:'currency', 
      author:'Claire Robinson', 
      header:'Receive money in any currency with no fees', 
      text:"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
    },
    {
      imgName:'restaurant', 
      author:'Wilson Hutton', 
      header:'Treat yourself without worrying about money', 
      text:"Our simple budgetting feature allows you to separate out your spending and set realistic limits each month. That means you..."
    },
    {
      imgName:'plane', 
      author:'Wilson Hutton', 
      header:'Take your Easybank card wherever you go', 
      text:"We want you to enjoy travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
    },
    {
      imgName:'confetti', 
      author:'Claire Robinson', 
      header:'Receive money in any currency with no fees', 
      text:"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
    },
  ];
  return (
    <div className="articles ">
      <div className="container">
        <div className="articles__header">
          <SubHeader text={'Latest Articles'}/>
        </div>
        <div className="articles__wrapper">
          <div className="wrapper__column">
            {data.slice(0,2).map(
              (cardData)=>(
                  <Card
                    imgName={cardData.imgName} 
                    author={cardData.author} 
                    header={cardData.header} 
                    text={cardData.text}
                  />
                )
              )
            }
          </div>
          <div className="wrapper__column">
            {data.slice(2).map(
              (cardData)=>(
                  <Card
                    imgName={cardData.imgName} 
                    author={cardData.author} 
                    header={cardData.header} 
                    text={cardData.text}
                  />
                )
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles