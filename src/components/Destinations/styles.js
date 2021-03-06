import styled from 'styled-components';
import imgBg from '../../images/background.jpg';

export const Container = styled.section`
  text-align: center;
  background: url(${imgBg}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;
  color: #fff;
  font-size: 8rem;
`;
