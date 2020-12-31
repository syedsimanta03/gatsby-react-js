import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <h1>Design and code React apps</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            iusto, aliquam beatae accusantium sit id voluptates perferendis
            autem. Consequatur, architecto? Optio tempora iste, reiciendis
            nostrum corrupti porro consequuntur nihil. Hic?
          </p>
          <Link to="/page-2">Go to next page</Link>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`

const TextWrapper = styled.div`
  max-width: 360px;
`