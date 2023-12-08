import styled from "styled-components";

export const StyledProject = styled.main`
  background-color: ${({ theme }) => theme.color.bc};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.typography.font};

  display: flex;
  justify-content: center;
  width: 100%;
  .project-container {
    max-width: ${({ theme }) => theme.break.large};
    width: 100%;

    display: flex;
    flex-direction: column;
    
    gap: 2rem;

    margin: 5rem 0 5rem 0;

    @media (max-width: ${({ theme }) => theme.break.small}) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header-project {
      padding: 0 1rem 0 1rem;

      display: flex;
      flex-direction: column;
      gap: 1.3rem;
      h1 {
        font-size: 1.5rem;
        font-weight: 700;
      }
      p {
        font-size: .85rem;
        color: ${({ theme }) => theme.color.gray_500};
        font-weight: 200;
        span{
          color: ${({ theme }) => theme.color.primary};
          font-weight: 500;
        }
      }
    }
    .projects {
      padding: 0 1rem 0 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
