import React from 'react';
import * as FaIcon from 'react-icons/fa';

import * as S from './styles';

const  Footer = () => {
  return (
    <S.Footer>
      <S.SocialMidia>
        <S.SocialMediaWrap>
          <S.SocialLogo to="/">
            <S.SocialIcon />
            Explore Angola
          </S.SocialLogo>
          <S.WebsiteRights>Explore Angola &copy; {new Date().getFullYear()}</S.WebsiteRights>
          <S.SocialIcons>
            <S.SocialLink href="/" target="_blank" aria-label="Twitter">
              <FaIcon.FaTwitter />
            </S.SocialLink>
          </S.SocialIcons>
          <S.SocialIcons>
            <S.SocialLink href="/" target="_blank" aria-label="Instagram">
              <FaIcon.FaInstagram />
            </S.SocialLink>
          </S.SocialIcons>
          <S.SocialIcons>
            <S.SocialLink href="/" target="_blank" aria-label="Facebook">
              <FaIcon.FaFacebook />
            </S.SocialLink>
          </S.SocialIcons>
          <S.SocialIcons>
            <S.SocialLink href="/" target="_blank" aria-label="Linkedin">
              <FaIcon.FaLinkedin />
            </S.SocialLink>
          </S.SocialIcons>
        </S.SocialMediaWrap>
      </S.SocialMidia>
    </S.Footer>
  )
}

export default Footer;