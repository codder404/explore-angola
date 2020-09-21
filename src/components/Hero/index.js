import React from 'react';

import * as S from './styles';

const Hero = () => {
  return (
    <>
      <S.Hero>
        <S.HeroTitle>Know Angola</S.HeroTitle>
        <S.HeroText>Plan your next trip today</S.HeroText>
        <S.HeroBtnContainer>
          <S.HeroButton>Get started</S.HeroButton>
        </S.HeroBtnContainer>
      </S.Hero>
    </>
  )
}

export default Hero;