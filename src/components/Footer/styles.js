import { Link } from 'gatsby';
import styled from 'styled-components';
import { DiScala } from 'react-icons/di';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #101522;
`;

export const SocialMidia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const SocialIcon = styled(DiScala)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  font-family: "Ubuntu", sans-serif;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
`;

export const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
`;