import Header from "../Header/Header";
import SubHeader from "../SubHeader/SubHeader";
import SubSubHeader from "../SubSubHeader/SubSubHeader";
import Paragraph from "../Paragraph/Paragraph";
import Icon from "../Icon/Icon";

const ContentSection = () => {
  const data = [
    {
      iconName:'online',
      header:'Online Banking',
      paragraph:'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      iconName:'budgeting',
      header:'Simple Budgeting',
      paragraph:"See exactly where your money goes each month. Recieve notifications when you're close to your hitting limits."
    },
    {
      iconName:'onboarding',
      header:'Fast Onboarding',
      paragraph:"We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
      iconName:'api',
      header:'Open API',
      paragraph:"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },
  ]
  return (
    <div className="content-section ">
      <div className="container">
        <div className="content-section__header ">
          <SubHeader text={'Why choose Easybank?'}/>
        </div>
        <div className="content-section__paragraph">
          <Paragraph text={'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.'}/>
        </div>
        {data.map(
          (elem)=>(
            <>
              <div className="content-section__icon">
                <Icon iconName={elem.iconName}/>
              </div>
              <div className="content-section__subsubheader">
                <SubSubHeader text={elem.header}/>
              </div>
              <div className="content-section__paragraph">
                <Paragraph text={elem.paragraph}/>
              </div>
            </>
        ))}
      </div>
    </div>
  )
}

export default ContentSection