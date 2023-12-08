import styled from "styled-components";

export const CardMeStyled = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  font-family: ${({ theme }) => theme.typography.font};
  font-weight: 200;

  position: absolute;

  top: 8%;
  left: 20px;

  @media (max-width: ${({ theme }) => theme.break.small}) {
    display: flex;
    position: relative;
    top: 50px;
    left: -1px;
  }
  img {
    width: 45px;
    clip-path: circle(50%);
  }
  h1 {
    color: white;
  }
`;
