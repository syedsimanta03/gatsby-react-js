import React, { useState } from "react"
import { toolTipData } from "../../Data/Menudata"
import styled from "styled-components"

const MenuTooltip = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {toolTipData.map((item, index) => (
        <Items>
          <img src={item.icon} alt="icon" />
          <div key={index}>{item.title}</div>
        </Items>
      ))}
    </Wrapper>
  )
}

export default MenuTooltip

const Wrapper = styled.div`
  box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 60px;
  right: 30px;
  padding: 20px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  display: grid;
  grid-template-columns: 150px;
`
const Items = styled.div`
  display: grid;
  grid-template-columns: 45px, auto;
  
`