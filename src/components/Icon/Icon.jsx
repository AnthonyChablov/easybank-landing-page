import api from "../../assets/images/icon-api.svg";
import budgeting from "../../assets/images/icon-budgeting.svg";
import close from "../../assets/images/icon-close.svg";
import online from "../../assets/images/icon-online.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import onboarding from "../../assets/images/icon-onboarding.svg";
import facebook from "../../assets/images/icon-facebook.svg";
const Icon = ({iconName}) => {
  return (
    <div className="icon">
      <img src={
        {
          api: api,
          budgeting: budgeting,
          close:close,
          online:online,
          instagram:instagram,
          twitter:twitter,
          onboarding:onboarding,
          youtube:youtube,
          pinterest:pinterest,
          facebook:facebook,
        }[iconName]
      } alt="icon" />
    </div>
  )
}

export default Icon