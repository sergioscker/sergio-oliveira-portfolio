import styled from 'styled-components';

export const ContainerAbout = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    div {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-top: 3rem;
        gap: 2rem;
    };
    
    .text {
        font-size: 18px;
        line-height: 1.5; 
        color: #fff;
    };
    
    @media screen and (max-width: 1225px) {
        p {
        font-size: 16px;
     };
  };
`;