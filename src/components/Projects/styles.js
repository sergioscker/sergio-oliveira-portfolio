import styled from 'styled-components';

export const ContainerProject = styled.div`

      display: grid;
      grid-template-columns: repeat(2, 190px);
      gap: 1em;
      justify-content: center;
      align-items: center;

  .cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 19rem;
      height: 30rem;
      margin: 3rem;
      color: #fff;
      background-color: #011627;
      -webkit-box-shadow: 0px -2px 34px 1px rgba(0, 0, 0, 0.55);
      -moz-box-shadow: 0px -2px 34px 1px rgba(0, 0, 0, 0.55);
      box-shadow: 0px -2px 34px 1px rgba(0, 0, 0, 0.55);
      
    };

  &:hover {
      scale: 1.05;
    };

  .img {
      border-radius: 0 0 0 0;
      width: 19rem;
      height: 13rem;
    };

  .description {
      text-align: center;
      font-size: 2rem;
      padding: 1rem;
      color: #fff;
  };

  .container-techs {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 1rem;
  };

  .container-buttons {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      padding-top: 1rem;
  };

  .button {
    background: none;
    border: 1px solid #fff;
    padding: 5px;
    font-size: 0.70rem;

  &:hover {
    border: 1px solid #858484;
    };
  };

  a {
    color: #fff;
    text-decoration: none;

  &:hover {
    color: #989696;
    };

};
 
`;