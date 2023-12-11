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
          <a className="insta" href="">
            <FaInstagram size="30" />
          </a>
          <a className="link" href="">
            <FaLinkedin size="30" />
          </a>
          <a href="">
          <FaTelegram size="30" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};
