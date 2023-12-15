import { StyleAbout } from "./style";
import dev from "../../assets/DEV.svg"

export const About = () => {
  return (
    <StyleAbout id="ABOUT">
      <div className="about-container">
        <h1>Sobre mim</h1>
        <div className="content">
            <div className="side-left">
              <img src={dev} alt="" />
            </div>
            <div className="side-right">
              <p>
                Olá! Sou um desenvolvedor web <span>full stack</span> apaixonado por tecnologia e
                criatividade. Minha missão é transformar conceitos em experiências
                digitais excepcionais. Com habilidades abrangentes, do front-end ao
                back-end, busco constantemente inovação e soluções únicas. Acredito
                que a fusão de funcionalidade e design é a chave para projetos
                bem-sucedidos. Além da programação, sou um entusiasta ávido por
                aprender e aplicar as últimas tendências tecnológicas. Vamos criar
                algo incrível juntos!
              </p>
            </div>
        </div>
      </div>
    </StyleAbout>
  );
};
