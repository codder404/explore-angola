import React from 'react';

import Button from '../Button';
import * as S from './styles';

const Hero = () => {
  return (
    <>
      <S.Hero>
        <S.HeroTitle>Know Angola</S.HeroTitle>
        <S.HeroText>Plan your next trip today</S.HeroText>
        <S.HeroBtnContainer>
          <Button>Get started</Button>
        </S.HeroBtnContainer>
      </S.Hero>
    </>
  )
}

export default Hero;