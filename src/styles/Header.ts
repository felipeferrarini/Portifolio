import styled from 'styled-components';

type HeaderProps = {
  url: string;
};

export const Container = styled.div.attrs((props: HeaderProps) => ({
  url: props.url
}))<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70px;
  width: 100vw;
  position: ${props => (props.url === '/' ? 'relative' : 'fixed')};
`;
