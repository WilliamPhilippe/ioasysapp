import styled, { css, keyframes } from 'styled-components';

import { darken } from 'polished';

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    justify-content: center;

    input {
      background: #eee;

      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      padding-left: 10px;

      max-width: 80%;
      width: 500px;
      height: 40px;
    }
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

export const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;

  background: ${props => (props.loading ? '#666' : '#ac53f2')};
  border: none;
  border-radius: 4px;

  padding: 0;

  &:hover {
    background: ${props => (props.loading ? '#666' : darken(0.1, '#ac53f2'))};
    transition: 0.2s;

    cursor: ${props => (props.loading ? 'not-allowed' : 'pointer')};
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s infinite;
      }
    `}
`;
