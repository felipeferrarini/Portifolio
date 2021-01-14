import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0px;
  margin-top: 10vh;
  position: relative;
  width: 100vw;
  height: 70vh;
  color: #fff;

  @media all and (max-width: 768px) {
    margin-top: 50px;
  }

  .background {
    position: absolute;
    top: auto;
    width: 100vw;
    height: 70vh;
    z-index: 0;
    margin-top: 50px;
  }

  #erro {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font: 500 25px Roboto, sans-serif;

    img {
      width: 15vw;
      margin-right: 50px;
    }
  }
`;
