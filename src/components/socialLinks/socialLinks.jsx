import "./socialLinks.module.css";

const SocialLinks = ({icon, href}) => {
  return (
    <a className="ionIcon" href={href} target="_blank">
      <ion-icon name={icon} size="large"/>
    </a>
  );
};

export default SocialLinks;
