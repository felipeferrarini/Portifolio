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

    #experiencias {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      margin: 10px 30px;

      @media all and (max-width: 1000px) {
        flex-direction: column;
      }

      div {
        width: 50%;

        @media all and (max-width: 1000px) {
          width: 100%;
        }
      }

      h3 {
        color: #fff;
        font-size: 25px;
        margin-left: 0px;
      }

      ul,
      li {
        margin: 0;
        padding: 0;
      }

      ul {
        padding-left: 20px;
        border-left: 2px solid rgba(255, 255, 255, 0.2);

        .listMain {
          margin-bottom: 20px;
          position: relative;
          display: flex;
          flex-direction: column;

          ::before {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50px;
            left: -31px;
            top: 0;
            background: #18d26e;
            border: 2px solid #18d26e;
          }

          #curso {
            color: var(--verde);
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 10px;
          }

          #periodo {
            padding: 10px 10px;
            margin-bottom: 10px;
            background-color: rgba(255, 255, 255, 0.2);
            width: fit-content;
          }

          #local {
            font-style: italic;
          }

          ul {
            border-left: none;
            list-style: initial;
            margin-top: 10px;

            li {
              display: list-item;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
`;
