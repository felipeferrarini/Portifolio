import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 70vw;
  position: fixed;
  top: 0px;
  z-index: 200;
  color: #fff;
  padding-left: 15vw;
  padding-right: 15vw;
  animation: HeaderIn 0.5s;
  transition: all 0.2s;
  background-color: #000;

  @keyframes HeaderIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media all and (max-width: 1440px) {
    width: 80vw;
    padding-left: 10vw;
    padding-right: 10vw;
  }

  @media all and (max-width: 768px) {
    flex-direction: row;
    width: 100vw;
    padding-left: 0px;
    padding-right: 0px;
    justify-content: flex-start;
  }

  h1 {
    font-size: 35px;
    margin: 10px;
    margin-left: 30px;
    cursor: pointer;
    font-weight: 700;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: HeaderIn 0.5s;

    @media all and (max-width: 1440px) {
      font-size: 30px;
    }

    @media all and (max-width: 910px) {
      display: none;
    }

    @media all and (max-width: 768px) {
      display: flex;
      font-size: min(10vw, 20px);
      margin-top: 15px;
    }
  }
`;

export const SideMenuButtton = styled.div`
  margin-left: 10px;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
  }

  #sideMenu {
    margin-top: 10px;
    border: none;
    height: 40px;
    width: 40px;
    font-size: 25px;
    color: #fff;
    background-color: transparent;
  }

  #sideMenuOut {
    border: none;
    position: fixed;
    z-index: 299;
    background-color: #2222;
    height: 100vh;
    width: 100vh;
  }
`;

type NavMobileProps = {
  url: string;
};

export const NavMobile = styled.div.attrs((props: NavMobileProps) => ({
  url: props.url
}))<NavMobileProps>`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 70vw;
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 300;
  background-color: var(--preto);
  padding-left: 20px;
  animation: navIn 0.3s;
  transition: all 0.2s;
  overflow-y: auto;

  @keyframes navIn {
    from {
      left: -70vh;
    }
    to {
      left: 0px;
    }
  }

  @media all and (max-width: 768px) {
    display: flex;
  }

  h1 {
    margin-top: 50px;
    color: #fff;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;

    li {
      border-bottom: 2px solid transparent;
      margin-bottom: 10px;

      #border,
      #borderActive {
        height: 2px;
        transition: all 0.2s;
        border-radius: 1px;
        margin-top: 1px;
      }

      #border {
        animation: fadeOut 0.3s;
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
        font-size: 20px;
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
