import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
    width: 150px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 20px;
  }
`;

export const DisheCard = styled.li`
  max-width: 500px;
  padding: 10px 15px 10px 15px;
  border-radius: 4px;
  background: #fff;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div {
      align-items: center;
    }
    img {
      height: 250px;
      width: 500px;
    }
  }

  strong {
    color: #000;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  span {
    margin-top: 10px;
    color: #999;
  }
`;

export const LogoutButton = styled.button`
  margin: 25px 0 0;
  height: 44px;
  width: 500px;
  background: #fff;
  font-weight: bold;
  color: #ad1785;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#fff')};
  }
`;
