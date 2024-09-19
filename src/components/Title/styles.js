import styled from "styled-components";

const device = {
  large: "@media (min-width: 1200px)", // Telas grandes
  medium: "@media (min-width: 768px) and (max-width: 1199px)", // Telas médias
  small: "@media (max-width: 768px)", // Telas pequenas
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: auto;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: bold;
  max-width: 620px;
  width: 100%;
  padding: 22px;
  margin-top: 50px;
  color: #007bff;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);

  ${device.small} {
    font-size: 3rem;
  }
`;
