import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const H1 = styled.h1`
  font-style: normal;
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;
  max-width: 510px;
  width: 100%;
  text-align: center;
  padding: 15px;
  color: #4a8fff;
  box-shadow: #0a0a0a;
`;
