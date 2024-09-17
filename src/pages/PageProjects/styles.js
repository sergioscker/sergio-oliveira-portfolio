import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 120px 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  

  @media screen and (max-width: 770px) {
    img {
      display: block;
    }
  }
`;
