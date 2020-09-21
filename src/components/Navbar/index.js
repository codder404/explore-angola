import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import * as S from './styles';

const Navbar = ({ active, click }) => {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClicked(!clicked);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{color: '#141414'}}>
        <S.Navbar active={scroll} click={click}>
          <S.NavbarContainer>
            <S.NavbarLogo to="/">
              <S.NavbarIcon />
              Explore Angola
            </S.NavbarLogo>
            <S.NavbarMobileIcon onClick={handleClick}>
              {clicked ? <FaTimes /> : <FaBars />}
            </S.NavbarMobileIcon>
            <S.NavbarMenu onClick={handleClick} click={clicked}>
              <S.NavbarItem>
                <S.NavbarLinks to="/">Home</S.NavbarLinks>
              </S.NavbarItem>
              <S.NavbarItem>
                <S.NavbarLinks to="/galery">Gallery</S.NavbarLinks>
              </S.NavbarItem>
              <S.NavbarItem>
                <S.NavbarLinks to="/destinations">Destinations</S.NavbarLinks>
              </S.NavbarItem>
            </S.NavbarMenu>
          </S.NavbarContainer>
        </S.Navbar>
      </IconContext.Provider>
   </>
  )
}

export default Navbar;