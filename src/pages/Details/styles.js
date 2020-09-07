import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #ebe9d7;

  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 7px;

  padding: 7px;

  box-sizing: border-box;
`;

export const NavContent = styled.nav`
  background-image: linear-gradient(#ee4c77, #ce1a77);
  /* background-color: #ee4c77; */
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  i {
    animation: ${rotate} 2s infinite;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  p {
    margin: 10 auto 10 auto;
    max-width: 700px;
  }

  ul {
    margin-top: 30px;
    margin-right: auto;
    margin-left: 19.5%;

    li {
      margin-bottom: 10px;
    }
  }
`;
