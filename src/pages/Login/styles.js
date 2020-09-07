import styled, { keyframes } from 'styled-components';

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebe9d7;
`;

export const FormContent = styled.div`
  max-width: 550px;
  width: 100%;

  text-align: center;
  margin: auto;

  padding: 20px 20px 20px 20px;
  border-radius: 8px;

  transition: all 0.3s;
`;

export const InsideForm = styled.div`
  margin: 20px 20px;
  background: rgba(255, 255, 255, 0.3);
  padding: 10px 15px;
  border-radius: 8px;
`;

export const LogoContainer = styled.div`
  width: 208px;
  height: 64px;
  margin: auto;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
  color: #41464c;
`;

export const CheckAndLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    display: block;
    color: red;
  }
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
  i {
    animation: ${rotate} 2s infinite;
  }
`;
