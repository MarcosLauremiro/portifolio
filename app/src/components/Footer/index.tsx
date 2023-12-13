import { StyledFooter } from "./style";
import foto from "../../assets/miro.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyledFooter id="MIDIA">
      <div className="footer-container">
        <div className="pup">
          <img src={foto} alt="pessoa" />
          <div>
            <h1>Muito obrigado</h1>
            <p>Me siga nas redes sociais</p>
          </div>
        </div>
        <div className=" buttons">
          <a className="insta" target="blank" href="https://instagram.com/miro.dev_?igshid=OGQ5ZDc2ODk2ZA==">
            <FaInstagram size="30" />
          </a>
          <a className="link" target="blank" href="https://www.linkedin.com/in/marcos-lauremiro-melo-silva/">
            <FaLinkedin size="30" />
          </a>
          <a target="blank" href="https://t.me/+5599991598763">
          <FaTelegram size="30" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};
