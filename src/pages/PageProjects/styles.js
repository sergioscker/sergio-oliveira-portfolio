import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 56px 0;

  @media screen and (max-width: 770px) {
    img {
      display: block;
    }
  }
`;
