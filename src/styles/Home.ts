import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 100%;
  color: #fff;
  height: calc(100vh - 70px);
  padding-left: max(15vw, 10px);
  transition: all 0.2s;

  @media all and (max-width: 1440px) {
    padding-left: max(10vw, 10px);
  }

  @media all and (max-width: 768px) {
    padding-left: 0;
    align-items: center;
  }

  h1 {
    font-size: max(min(2.5vw, 3vw), 2rem);
    margin: 10px;
    cursor: pointer;
    font-weight: 700;
  }

  h2 {
    line-height: 2;
    margin: 10px;
    font-size: max(1.5vw, 1.2rem);
    font-weight: 400;

    span {
      border-bottom: 2px solid var(--verde);
      padding-bottom: 6px;
    }
  }
`;

export const Nav = styled.div`
  margin: 10px;

  @media all and (max-width: 768px) {
    display: none;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-bottom: 0;

    li {
      margin-right: 20px;
      border-bottom: 2px solid transparent;

      #border,
      #borderActive {
        height: 2px;
        transition: all 0.2s;
        border-radius: 1px;
        animation: fadeOut 0.3s;
        margin-top: 1px;
      }

      #borderActive {
        width: 100%;
        background-color: var(--verde);
      }

      :hover {
        #border {
          background-color: var(--verde);
          animation: fadeIn 0.3s;
        }
      }

      a {
        text-decoration: none;
        color: #fff;
        font-size: 17px;

        @media all and (max-width: 1200px) {
          font-size: 15px;
        }
      }

      @keyframes fadeIn {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }

      @keyframes fadeOut {
        from {
          width: 100%;
        }
        to {
          width: 0;
        }
      }
    }
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;

  a {
    text-decoration: none;
    color: #fff;
  }

  div {
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3a2e6b;
    transition: all 0.3s;
    margin-right: 10px;

    :hover {
      background-color: var(--verde);
    }
  }
`;
