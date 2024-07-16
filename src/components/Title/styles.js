import styled from "styled-components";

export const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-size: 2.5rem;
  font-weight: bold;
  max-width: 480px;
  text-align: center;
  margin: 60px auto;
  padding: 15px;
  color: #fff;

  div {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;
