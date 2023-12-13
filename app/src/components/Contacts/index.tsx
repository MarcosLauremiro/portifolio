import { ContactStyled } from "./style";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const Contacts = () => {
  return (
    <ContactStyled id="CONTACT">
      <div className="contact-container">
        <div className="left-side">
          <h1>
            Vamos agendar uma conversa para{" "}
            <span>desenvolver ideias juntos.</span> Estou pronto para colaborar
            e inspirar inovações!
          </h1>
          <p></p>
        </div>
        <div className="rigth-side">
          <div className="contact">
            <a
              target="blank"
              href=""
            >
              <MdOutlineMailOutline color="black" size="20" />
            </a>
            <div>
              <h1>Meu email</h1>
              <p>Me mande uma ideia ou um feedback</p>
              <span>Enviar email agora</span>
            </div>
          </div>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/marcos-lauremiro-melo-silva/"
              target="blank"
            >
              <FaLinkedin color="black" size="20" />
            </a>
            <div>
              <h1>Meu linkedIn</h1>
              <p>Vamos nos conectar a uma rede de compartilhamentos e ideias</p>
              <span>Conectar-se</span>
            </div>
          </div>
          <div className="contact">
            <a target="blank" href="https://t.me/+5599991598763">
              <FaTelegramPlane color="black" size="20" />
            </a>
            <div>
              <h1>Meu Contato</h1>
              <p>
                Tem algum projeto em mente? me manda uma mensagem direta e vamos
                conversar
              </p>
              <span>Enviar mensagem</span>
            </div>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
};
