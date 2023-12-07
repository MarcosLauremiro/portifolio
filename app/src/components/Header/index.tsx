import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="header-container">
        <h1>Lauremiro</h1>
        <div>
          <nav>
            <a href="">Home</a>
            <a href="">Projetos</a>
            <a href="">Contatos</a>
            <a href="">Midia</a>
          </nav>
        </div>
      </div>
    </HeaderStyle>
  );
};
