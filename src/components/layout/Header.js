import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from './../../Data/Menudata';
import MenuTooltip from "../tooltips/MenuTooltip";


const Header = () => {
  return (
    <>
      <Wrapper>
        <img src="/images/logos/logo.svg" />
        <MenuWrapper length={menuData.length}>
          {menuData.map((item, index) => (
            <Link to={item.link} key={index}>
              <MenuItem title={item.title}>
                <img src={item.icon} alt="menuicon" />
                {item.title}
              </MenuItem>
            </Link>
          ))}
        </MenuWrapper>
        <MenuTooltip />
      </Wrapper>
    </>
  )
}

export default Header

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.length}, auto);
`

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => props.title? '10px': '0px'};
  align-items: center;
  padding: 10px;
  transition: .5s ease-out;

  :hover {
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
  }
`