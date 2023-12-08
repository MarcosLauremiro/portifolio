import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    color: ${({ theme }) => theme.color.white};
    font-size: 1.3rem;
    font-weight: 700;
  }
  .tech {
    color: ${({ theme }) => theme.color.gray_500};
    font-size: 0.85rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    .lingue {
      /* border: .5px solid white; */
      font-size: 0.75rem;
    }
    .descri {
      height: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .buttons {
    display: flex;
    gap: 1rem;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.gray_500};
      font-size: 0.85rem;

      display: flex;
      gap: .5rem;
      align-items: center;
    }
    .git {

    }
    .apli {
    }
  }
`;
