import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background: #eee;
  /* height: 100%; */
  min-height: 100%;

  padding: 10px 10px;
`;

export const SideContainer = styled.div`
  background: #eee;

  position: fixed;
  top: 50%;
  left: 17.5%;
  transform: translateY(-50%);

  height: 800px;
  max-height: 80%;

  width: 280px;
  max-width: 30%;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Back = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  svg {
    color: rgba(0, 0, 0, 0.2);

    &:hover {
      color: #ac53f2;
      transition: 0.4s;
    }
  }

  cursor: pointer;
`;

export const Avatar = styled.div`
  img {
    background: #666;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    width: 100%;

    height: auto;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 5px;

  padding: 0 30px;

  p {
    color: #333;
    font-size: 24px;
  }

  span {
    margin: 0 3px;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
`;

export const Details = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding-top: 10px;
  padding-left: 10px;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  margin-left: 10px;
  margin-bottom: 7px;

  span {
    margin-left: 10px;
  }
`;

export const RepoContainer = styled.div`
  background: #eee;

  width: 50%;
  height: 100%;

  margin: 0 auto;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  padding-left: 180px;

  form {
    margin-top: 20px;
    margin-bottom: 25px;
    margin-right: 10px;
  }
`;

export const Repository = styled.div`
  p {
    font-size: 22px;
    a {
      color: #ac53f2;
    }
  }

  span {
    font: 14px 'Roboto', sans-serif;
    color: #666;
    margin-left: 10px;
    margin-top: 5px;
  }

  margin-right: 40px;
  margin-bottom: 10px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ItemRepo = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
  margin-bottom: 5px;

  span {
    margin-left: 3px;
    font: 12px 'Roboto', sans-serif;
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
  position: absolute;
  top: 50%;
  left: 50%;

  svg {
    animation: ${rotate} 2s infinite;
  }
`;
