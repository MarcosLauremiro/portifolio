import styled from "styled-components";

export const CardMeStyled = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  font-family: ${({ theme }) => theme.typography.font};
  font-weight: 200;

  margin: 60px 0 60px 0 ;

  img {
    width: 45px;
    clip-path: circle(50%);
  }
  h1 {
    color: white;
  }
`;
