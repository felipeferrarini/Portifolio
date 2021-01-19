import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 90px;
  color: #fff;

  #card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70vw;
    background-color: #000;
    margin-bottom: 20px;

    @media all and (max-width: 1440px) {
      width: 80vw;
    }

    @media all and (max-width: 768px) {
      width: 90vw;
    }

    #head {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: min(100%, 200px);
      margin: 0 32px;

      #bar {
        display: flex;
        height: 2px;
        width: 100%;
        margin-top: 3px;
        margin-left: 10px;
        background-color: var(--verde);
      }

      h3 {
        color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
        font-weight: 400;
      }
    }

    h1 {
      margin: 0 30px;
    }

    #sobre {
      margin: 0 30px;

      h3 {
        color: var(--verde);
        font-size: 25px;
      }

      ul,
      li {
        margin: 0;
        padding: 0;
      }

      li {
        list-style: none;
        color: var(--verde);
        font-size: 18px;
        margin-bottom: 20px;

        span {
          color: #fff;
          line-height: 1.5;
        }
      }
    }

    #interesses {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      width: calc(100% - 40px);
      margin-left: 20px;
      margin-bottom: 20px;
      margin-right: 20px;
      justify-items: center;

      @media all and (max-width: 1000px) {
        grid-template-columns: 33% 33% 33%;
      }

      @media all and (max-width: 768px) {
        grid-template-columns: 50% 50%;
      }

      @media all and (max-width: 425px) {
        grid-template-columns: 100%;
      }

      #item {
        background-color: rgba(255, 255, 255, 0.1);
        margin: 10px 10px;
        height: 80px;
        width: 90%;
        transition: all 0.2s;
        font-size: 18px;
        display: flex;
        flex-direction: row;
        align-items: center;

        :hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        svg {
          font-size: 30px;
          margin: 20px;
          padding: 0px;
        }
      }
    }
  }
`;
