import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 80px;

  #card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #000;
    margin-right: max(15vw, 10px);
    margin-left: max(15vw, 10px);

    @media all and (max-width: 1440px) {
      margin-right: max(10vw, 10px);
      margin-left: max(10vw, 10px);
    }

    @media all and (max-width: 768px) {
      margin-right: max(3vw, 5px);
      margin-left: max(3vw, 5px);
    }
  }
`;
