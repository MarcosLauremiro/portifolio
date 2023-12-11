import styled from "styled-components";

export const ContactStyled = styled.main`
  background-color: ${({ theme }) => theme.color.bc};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.typography.font};

  display: flex;
  justify-content: center;
  width: 100%;
  .contact-container {
    max-width: ${({ theme }) => theme.break.large};
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 2rem;

    margin: 5rem 0 5rem 0;

    padding: 0 1rem 0 1rem;

    @media (max-width: ${({ theme }) => theme.break.small}) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .left-side {
      display: flex;
      @media (max-width: ${({ theme }) => theme.break.small}) {
      display: none;
    }
      h1 {
        margin-top: 2rem;

        font-size: 1.5rem;
        line-height: 1.75;
        span {
          font-weight: 500;
          color: ${({ theme }) => theme.color.primary};
        }
      }
      p {
      }
    }
    .rigth-side {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      .contact {
        display: flex;
        align-items: start;
        justify-content: start;
        gap: 1rem;

        a {
          background: rgb(74, 68, 54);
          background: linear-gradient(
            135deg,
            rgba(74, 68, 54, 1) 0%,
            rgba(117, 99, 56, 1) 100%
          );

          padding: 1.5rem;
          border-radius: 6px;

          display: flex;
          align-items: center;
          justify-content: center;
        }
        div {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          h1 {
          }
          p {
            height: 35px;
            overflow: hidden;
            text-overflow: ellipsis;

            color: ${({ theme }) => theme.color.gray_500};
            font-size: 0.85rem;
          }
          span {
            color: ${({ theme }) => theme.color.gray_300};
            font-size: 0.85rem;
          }
        }
      }
    }
  }
`;
