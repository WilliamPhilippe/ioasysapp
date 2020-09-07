import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
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
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 7px;

  padding: 7px;

  box-sizing: border-box;
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

export const NavContent = styled.nav`
  background-image: linear-gradient(#ee4c77, #ce1a77);

  /* background-color: #ee4c77; */
`;
