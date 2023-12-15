import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="header-container">
        <h1>Lauremiro</h1>
        <div>
          <nav>
            <a href="#HOME">Home</a>
            <a href="#PROJECT">Projetos</a>
            <a href="#CONTACT">Contatos</a>
            <a href="#MIDIA">Midia</a>
            <a href="#ABOUT">Sobre mim</a>
          </nav>
        </div>
      </div>
    </HeaderStyle>
  );
};
