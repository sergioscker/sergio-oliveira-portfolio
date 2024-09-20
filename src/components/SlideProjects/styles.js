import styled from "styled-components";

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
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  color: white;
`;

export const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  padding: 20px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none; /* Hide scrollbar */
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
  flex: 0 0 auto; /* Prevent card shrinkage */
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

export const Title = styled.h3`
  padding: 80px 40px;
  margin-top: 40px;
  font-size: 48px;
  color: #007bff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
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

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? "#007bff" : "#555")};
  border-radius: 50%;
`;
