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

    #projetos {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      width: calc(100% - 40px);
      margin: 20px;
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
        height: 345px;
        width: calc(90% - 5px);
        transition: all 0.2s;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 5px;

        :hover {
          background-color: var(--roxo);

          #icon {
            background-color: #fff;

            ::before {
              background: var(--verde);
            }

            svg {
              color: var(--verde);
            }
          }
        }

        a {
          text-decoration: none;
          color: #fff;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        #type {
          font-weight: 500;
          margin-bottom: 5px;
        }

        #tecnology {
          font-size: 15px;
        }

        span {
          text-align: center;
        }

        #icon {
          height: 60px;
          width: 60px;
          background-color: var(--verde);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          border-radius: 5px;
          position: relative;
          z-index: 10;
          transition: all 0.2s;
          margin-top: 80px;
          transform-style: preserve-3d;

          svg {
            margin: 0;
            padding: 0;
            transition: all 0.2s;
            font-size: 30px;
          }

          ::before {
            position: absolute;
            content: '';
            left: -8px;
            top: -8px;
            height: 100%;
            width: 100%;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 5px;
            transition: all 0.2s;
            transform: translateZ(-1px);
            z-index: 1;
          }
        }
      }
    }
  }
`;
