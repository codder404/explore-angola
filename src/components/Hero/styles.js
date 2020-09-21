import styled from 'styled-components';

export const Hero = styled.section`
  background: url("https://images.unsplash.com/photo-1562859330-634463a05642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80") center center/cover no-repeat;

  height: 100vh;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;
`;

export const HeroTitle = styled.h1`
  font-size: 7rem;
  margin-top: 0px;
  background-image: linear-gradient(to bottom, #ff4040 20%, #0467FB 80%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media (max-width: 960px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroText = styled.p`
  margin-top: 8px;
  font-size: 2rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const HeroBtnContainer = styled.div `
  margin-top: 2rem;
`;