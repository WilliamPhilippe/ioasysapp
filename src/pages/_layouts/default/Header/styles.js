import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #41464c;
`;

export const Content = styled.div`
  font-family: 'Source Sans Pro', sans-serif;

  height: 70px;
  max-width: 1325px;
  margin: 0 auto;
  /* padding: 5px 5px; */

  display: flex;
  /* justify-content: left; */
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      font-size: 28px;
      color: #fff;
      display: flex;
      align-items: center;

      span {
        margin-left: 6px;
        font-size: 25px;
        -webkit-font-smoothing: antialiased;
      }
    }
  }
`;

export const Links = styled.div`
  margin-left: 20px;

  padding: 0 20px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background: gray;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background: #000;
    border-radius: 10px;
  }
`;

export const LinkContainer = styled.div`
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;

  ${props =>
    props.selected &&
    css`
      box-shadow: inset 0 -5px 0px #fff;
    `}

  a {
    font-weight: ${props => props.selected && 'bold'};
    color: #fff;

    &:hover {
      color: #fff;

      font-weight: bold;
    }
  }
`;

export const Profile = styled.div`
  margin-left: 40px;

  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
  }
`;

export const Right = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;

  margin-left: auto;
`;
