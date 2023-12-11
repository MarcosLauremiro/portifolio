import { CardMe } from "./card";
import { StyledHome } from "./style";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export const Home = () => {
  return (
    <StyledHome>
      <div className="home-container">
        <div className="left-side">
          <CardMe></CardMe>
          <div className="left-container">
            <h1 className="phrase">
              Transformando ideias em <span>experiências</span> memoráveis, uma
              linha de <span>código</span> de cada vez.
            </h1>
            <p className="text">
              Desenvolvedor Web Full Stack | Especialista em Front-end, Back-end
              e Gerenciamento de Dados
            </p>
            <div className="butons">
              <a target="blank" href="https://github.com/MarcosLauremiro?tab=repositories" className="see">Ver Projetos</a>
              <a target="blank" href="https://github.com/MarcosLauremiro" className="git">
                <FaGithub color='black' size="20px" />
              </a>
            </div>
          </div>
          <div className="techs">
              <FaHtml5 className='tech' size="100px" opacity=".5" />
              <FaCss3Alt className='tech' size="100px" opacity=".5" />
              <FaNode className='tech' size="100px" opacity=".5" />
              <FaNodeJs className='tech' size="100px" opacity=".5" />
              <FaReact className='tech' size="100px" opacity=".5" />
          </div>
        </div>
        <div className="rigth-side"></div>
      </div>
    </StyledHome>
  );
};
