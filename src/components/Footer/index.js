import React from 'react';
import * as FaIcon from 'react-icons/fa';
import * as S from './styles';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.SocialMedia>
        <S.SocialMediaWrap>
          <S.SocialLogo to="/">
            <S.SocialIcon />
            Explore Angola
          </S.SocialLogo>
          <S.WebsiteRights>Explore Angola © {new Date().getFullYear()}</S.WebsiteRights>
          <S.SocialIcons>
            <S.SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaIcon.FaFacebook />
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaIcon.FaInstagram />
            </S.SocialIconLink>
            <S.SocialIconLink
              href=""
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaIcon.FaYoutube />
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaIcon.FaTwitter />
            </S.SocialIconLink>
            <S.SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <FaIcon.FaLinkedin />
            </S.SocialIconLink>
          </S.SocialIcons>
        </S.SocialMediaWrap>
      </S.SocialMedia>
    </S.FooterContainer>
  )
}

export default Footer
