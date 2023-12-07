import styled from "styled-components";
import page from "../../assets/page.svg"

export const StyledHome = styled.main`
  background-color: #242124;
  background-image: linear-gradient(160deg, #242124 0%, #4a4436 100%);

  height: calc(100vh - 3.5rem);

  display: flex;
  justify-content: center;
  width: 100%;

  font-family: ${({ theme }) => theme.typography.font};
  color: ${({ theme }) => theme.color.white};

  .home-container {
    max-width: 1200px;
    width: 100%;

    display: grid;

    grid-template-columns: 2fr 1fr;
    .frase{
      text-transform: uppercase;
      font-size: 1.5rem;
      line-height: normal 2;
      span{
        color: ${({ theme }) => theme.color.primary};
      }
    }
    .left-side{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .rigth-side{
      background-image: url(${page});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;
