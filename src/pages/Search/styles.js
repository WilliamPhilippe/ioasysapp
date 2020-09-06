import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 100px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  margin-bottom: 20px;

  img {
    width: 200px;
  }

  span {
    margin-left: 10px;
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Error = styled.span`
  color: #e11;
  margin-top: 10px;
`;
