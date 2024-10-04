import styled from "styled-components";

export const Title = styled.h3`
  padding: 80px 40px;
  margin-top: 40px;
  font-size: 48px;
  background: linear-gradient(45deg, #0288d1, #007bff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 45px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 20px;

  .arrow-button {
    display: flex;
    gap: 12px;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  color: white;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  padding: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  /* Estilos para esconder a barra de rolagem */
  -ms-overflow-style: none; /* Para Internet Explorer e Edge */
  scrollbar-width: none; /* Para Firefox */

  ::-webkit-scrollbar {
    display: none; /* Para Chrome, Safari e Opera */
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex: 0 0 auto;
  background-color: #181818;
  border-radius: 10px;
  padding: 15px;
  margin-right: 20px;
  width: 300px;
  scroll-snap-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  .card-image {
    width: 100%;
    height: 180px;
    border-radius: 8px;
    margin-bottom: 15px;
    object-fit: cover;
  }

  h3 {
    font-size: 25px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px;
    gap: 8px;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const Tech = styled.span`
  background-color: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;

  @media (max-width: 480px) {
    padding: 5px 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ProjectButton = styled.button`
  background: linear-gradient(45deg, #0056b3, #007bff);
  padding: 10px 12px;
  text-align: center;
  color: white;
  border: none;
  border-radius: 6px;

  &:hover {
    opacity: 0.8;
    background: linear-gradient(-45deg, #0056b3, #007bff);
  }
`;

export const GithubButton = styled(ProjectButton)`
  background: linear-gradient(45deg, #0056b3, #007bff);
`;

export const ArrowButton = styled.button`
  background: linear-gradient(45deg, #0056b3, #007bff);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50%;
  font-size: 20px;

  &:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isActive ? "#007bff" : "#555")};
  border-radius: 50%;
  transition: background-color 0.3s ease;
`;
