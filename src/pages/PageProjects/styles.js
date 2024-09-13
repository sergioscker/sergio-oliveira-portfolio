import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 56px 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 770px) {
    img {
      display: block;
    }
  }
`;
