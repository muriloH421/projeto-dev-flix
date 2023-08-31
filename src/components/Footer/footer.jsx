// para utilizar um oponente crie o import na pagina que deseja
// coloque o descritivo entre <Footer>Descritivo</Footer>
// passe informação dentro da tag footer - link
// <Footer link={}>ProfCastello</Footer>
import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css";

const Footer = ({children, link}) => {
  return (
    <footer>
      <p>
        feito com <ion-icon name="heart" /> por {" "}<a href={link} target="_blank">{" "}{children}
        </a>
      </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com/muriloH421"}/>
        <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/murilo_basilio1142/"}/>
        <SocialLinks icon={"logo-linkedin"} href={"https://www.linkedin.com/in/basilio-murilo-027b69287"}/>
    </footer>
  );
};

export default Footer;
