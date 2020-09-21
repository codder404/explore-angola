import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import * as S from './styles';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

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
          </S.NavbarContainer>
        </S.Navbar>
      </IconContext.Provider>
   </>
  )
}

export default Navbar;