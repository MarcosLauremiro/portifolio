import styled from "styled-components";

export const StyleAbout = styled.main`
  background-color: ${({ theme }) => theme.color.bc};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.typography.font};

  display: flex;
  justify-content: center;
  width: 100%;

  .about-container {
    max-width: ${({ theme }) => theme.break.large};
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 2rem;

    margin: 5rem 0 5rem 0;
    padding: 0 1rem 0 1rem;
    h1 {
        font-size: 1.5rem;
        font-weight: 700;
      }
    .content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      .side-left {
        img {
          width: 80%;
        }
      }
      .side-right {
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          font-size: 0.9rem;
          span {
            color: ${({ theme }) => theme.color.primary};
            font-weight: 700;
          }
        }
      }
    }
  }
`;
