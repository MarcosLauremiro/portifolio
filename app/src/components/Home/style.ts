import styled from "styled-components";

export const StyledHome = styled.main`
  background-color: ${({ theme }) => theme.color.gray_900};

  height: calc(100vh - 3.5rem);

  display: flex;
  justify-content: center;
  width: 100%;

  font-family: ${({ theme }) => theme.typography.font};
  color: ${({ theme }) => theme.color.white};

  .home-container {
    max-width: ${({ theme }) => theme.break.large};
    width: 100%;

    display: grid;
    grid-template-columns: 2fr 1fr;
    @media (max-width: ${({ theme }) => theme.break.small}) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .left-side {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 4rem;

      padding: 0 1rem 0 1rem;

      position: relative;
      @media (max-width: ${({ theme }) => theme.break.small}) {
        display: flex;
        justify-content: center;
      }
      .left-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        @media (max-width: ${({ theme }) => theme.break.small}) {
          gap: 1rem;
        }
      }
      .phrase {
        font-size: 1.5rem;
        line-height: 1.75;
        span {
          font-weight: 500;
          color: ${({ theme }) => theme.color.primary};
        }
      }

      .text {
        font-weight: 300;
      }

      .butons {
        display: flex;
        align-items: center;
        gap: 1rem;
        .see {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 1rem 0 1rem 0;
          width: 140px;

          border-radius: 6px;
          border: none;

          background-color: ${({ theme }) => theme.color.primary};

          color: ${({ theme }) => theme.color.white};
          font-weight: 600;
          font-family: ${({ theme }) => theme.typography.font};
          text-decoration: none;
          font-size: 0.88rem;
          &:hover {
            cursor: pointer;
          }
        }
        .git {
          height: 50px;
          width: 50px;

          border-radius: 50%;
          border: none;

          background-color: ${({ theme }) => theme.color.white};

          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            cursor: pointer;
          }
        }
      }

      .techs {
        width: 100%;
        display: flex;
        gap: 0.6rem;
        @media (max-width: ${({ theme }) => theme.break.small}) {
          .tech {
            width: 60px;
          }
        }
        @media (max-width: ${({ theme }) => theme.break.min}){
          .tech {
            width: 50px;
          }
        }
      }
    }

    .rigth-side {
      @media (max-width: ${({ theme }) => theme.break.small}) {
        display: none;
      }
    }
  }
`;
