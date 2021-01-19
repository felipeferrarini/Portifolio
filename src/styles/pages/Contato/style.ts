import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 100px;
  color: #fff;

  #card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70vw;
    background-color: #000;
    margin-bottom: 20px;

    #imagem {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
      }
    }

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

    #contatos {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      margin: 30px;
      width: calc(100% - 30px);

      @media all and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        margin: 10px;
      }

      #email,
      #telefone,
      #social {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;

        @media all and (max-width: 1000px) {
          width: 100%;
        }
      }

      #email,
      #telefone,
      #social {
        #title {
          margin: 20px 0;
          font-size: 25px;
          display: flex;
          flex-direction: row;
          align-items: center;

          @media all and (max-width: 768px) {
            font-size: 20px;
          }

          svg {
            font-size: 40px;
            margin: 0 10px;

            @media all and (max-width: 768px) {
              font-size: 30px;
            }
          }
        }

        #link {
          cursor: pointer;
          text-decoration: none;
          color: #fff;
          transition: all 0.2s;
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 20px;

          :hover {
            color: var(--verde);
          }

          svg {
            margin: 0 5px;
            font-size: initial;
            color: var(--verde);
          }
        }
      }

      #social {
        h3 {
          margin-left: 10px;
        }
      }
    }
  }
`;
