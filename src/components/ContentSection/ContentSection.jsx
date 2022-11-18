import Header from "../Header/Header";
import SubHeader from "../SubHeader/SubHeader";
import SubSubHeader from "../SubSubHeader/SubSubHeader";
import Paragraph from "../Paragraph/Paragraph";
import Icon from "../Icon/Icon";

const ContentSection = () => {
  return (
    <div className="content-section ">
      <div className="container">
        <div className="content-section__header ">
          <SubHeader text={'Why choose Easybank?'}/>
        </div>
        <div className="content-section__paragraph">
          <Paragraph text={'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.'}/>
        </div>
        {/* online Banking */}
        <div className="content-section__icon">
          <Icon iconName={'online'}/>
        </div>
        <div className="content-section__subsubheader">
          <SubSubHeader text={'Online Banking'}/>
        </div>
        <div className="content-section__paragraph">
          <Paragraph text={'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'}/>
        </div>
        {/* Simple budgeting */}
        <div className="content-section__icon">
          <Icon iconName={'budgeting'}/>
        </div>
        <div className="content-section__subsubheader">
          <SubSubHeader text={'Simple Budgeting'}/>
        </div>
        <div className="content-section__paragraph">
          <Paragraph text={"See exactly where your money goes each month. Recieve notifications when you're close to your hitting limits."}/>
        </div>
        {/* Fast Onboarding */}
        <div className="content-section__icon">
          <Icon iconName={'budgeting'}/>
        </div>
        <div className="content-section__subsubheader">
          <SubSubHeader text={'Simple Budgeting'}/>
        </div>
        <div className="content-section__paragraph">
          <Paragraph text={"We don't do branches. Open your account in minutes online and start taking control of your finances right away."}/>
        </div>
        {/* Open API */}
        <div className="content-section__icon">
          <Icon iconName={'api'}/>
        </div>
        <div className="content-section__subsubheader">
          <SubSubHeader text={'Open API'}/>
        </div>
        <div className="content-section__paragraph">
          <Paragraph text={"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}/>
        </div>
      </div>
    </div>
  )
}

export default ContentSection