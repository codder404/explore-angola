import { Link } from 'gatsby';
import styled from 'styled-components';
import { DiScala } from 'react-icons/di';

export const Navbar = styled.nav`
  background: ${({active}) => (active ? "#fff" : "linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)")};

  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  position: sticky;
  font-size: 1rem;
  z-index: 999;

  @media (max-width: 980px) {
    background: ${({click}) => (click ? "#fff" : "transparent")};
    transition: all 0.8s ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1000px;
  z-index: 1;
`;

export const NavbarLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #141414;
`;

export const NavbarIcon = styled(DiScala)`
  margin: 0 0.5rem 0 2rem;
`;

export const NavbarMobileIcon = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    position: absolute;
    font-size: 1.8rem;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;