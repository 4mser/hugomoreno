import styled from "styled-components";

import { CgMenuRight } from "react-icons/cg";
import {
  BiHome,
  BiBookReader,
  BiBriefcaseAlt2,
  BiPhoneCall,
} from "react-icons/bi";

import { FiSun, FiMoon } from "react-icons/fi";

import { VscChromeClose } from "react-icons/vsc";

const Header = ({ handleMenuChange, handleTemaChange, tema, MenuOpen }) => {
  return (
    <HeaderStyle tema={tema}>
      <Logo tema={tema}>HUGO MORENO</Logo>

      <Menu tema={tema}>
        {tema === "dark" ? (
          <FiSun className="icono-tema" onClick={handleTemaChange}></FiSun>
        ) : (
          <FiMoon className="icono-tema" onClick={handleTemaChange}></FiMoon>
        )}

        {MenuOpen === "open" ? (
          <CgMenuRight onClick={handleMenuChange}></CgMenuRight>
        ) : (
          <VscChromeClose onClick={handleMenuChange}></VscChromeClose>
        )}
      </Menu>

      <Nav MenuOpen={MenuOpen} tema={tema}>
        <li>
          <BiHome></BiHome> Inicio
        </li>
        <li>
          <BiBookReader></BiBookReader> Sobre Mí
        </li>
        <li>
          <BiBriefcaseAlt2></BiBriefcaseAlt2> Servicios
        </li>
        <li>
          <BiPhoneCall></BiPhoneCall> Contacto
        </li>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;

const Menu = styled.div`
  width: 6rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  .icono-tema {
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  font-family: montserrat;
  user-select: none;
  color: ${(props) =>
    props.tema === "dark" ? "var(--color2)" : "var(--blackColor)"};
`;

const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 1.5rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  /* box-shadow: 0 2px 10px var(--bShadow); */
  /* background: ${(props) =>
    props.tema === "light" ? "var(--color2)" : "var(--color1)"}; */

  svg {
    font-size: 2.4rem;
    user-select: none;
    color: ${(props) =>
      props.tema === "dark" ? "var(--color2)" : "var(--blackColor)"};
  }
`;

const Nav = styled.div`
  list-style: none;
  position: fixed;
  user-select: none;
  width: 100%;
  height: ${(props) => (props.MenuOpen === "open" ? "0rem" : "4rem")};
  padding: 0 2rem;
  left: 0;
  background: ${(props) =>
    props.tema === "dark" ? "var(--navColor)" : "var(--navColorLight)"};
  overflow: hidden;
  top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  transition: 0.3s;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-family: montserrat;
    font-weight: 400;
    font-size: 0.6rem;
    color: white;
    opacity: 0.9;

    svg {
      font-size: 1.3rem;
      color: white;
    }
  }
`;
