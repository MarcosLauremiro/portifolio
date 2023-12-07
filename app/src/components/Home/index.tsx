import { CardMe } from "./card";
import { StyledHome } from "./style";

export const Home = () => {
  return (
    <StyledHome>
      <div className="home-container">
        <div className="left-side">
          <div className="">
            <CardMe></CardMe>
            <h1 className="frase">
              Transformando ideias em <span>experiências</span> memoráveis, uma
              linha de <span>código</span> de cada vez.
            </h1>
          </div>
        </div>
        <div className="rigth-side"></div>
      </div>
    </StyledHome>
  );
};
