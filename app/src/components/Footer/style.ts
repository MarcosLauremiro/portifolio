import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.gray_900};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.typography.font};

  display: flex;
  justify-content: center;
  width: 100%;
  .footer-container {
    max-width: ${({ theme }) => theme.break.large};
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 2rem;

    margin: 2rem 0 2rem 0;

    padding: 0 1rem 0 1rem;
    .pup {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      font-family: ${({ theme }) => theme.typography.font};
      font-weight: 200;
      img {
        width: 45px;
        clip-path: circle(50%);
      }
      div {
        h1 {
          color: white;
        }
        p{
            font-size: .85rem;
            color: ${({ theme }) => theme.color.gray_500};
        }
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: end;

      gap: 1rem;
      a {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;
      }
    }
  }
`;
