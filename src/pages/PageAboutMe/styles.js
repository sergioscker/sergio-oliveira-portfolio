import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    h1 {
      font-size: 40px;
      text-align: left;
      color: #4a8fff;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    }

    .text {
      font-size: 18px;
      line-height: 1.5rem;
      color: #fff;
      text-align: left;

      span {
        color: #007bff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 1225px) {
    p {
      font-size: 16px;
    }
  }
`;
