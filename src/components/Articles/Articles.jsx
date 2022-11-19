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
      text:"We want you to enjoy travels. This is why we don't charge any fees on purchases while you're aborad. We'll even show you..."
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
        <SubHeader text={'Latest Articles'}/>
        {data.map(
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
  )
}

export default Articles