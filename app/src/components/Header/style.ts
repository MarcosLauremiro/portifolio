import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.color.black};

  font-family: ${({ theme }) => theme.typography.font};

  padding: 0 1rem 0 1rem;

  border-bottom: 1.5px solid ${({ theme }) => theme.color.second};

  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.color.white};
    font-weight: 600;
    font-size: 1.2rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    @media(max-width: 500px) {
        display: none;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.white};
      height: 100%;

      &:hover{
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
