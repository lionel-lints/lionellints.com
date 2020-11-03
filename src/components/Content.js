import styled from 'styled-components'

import Blurb from './Blurb.js'
import About from './About.js'
import Logo from '../assets/lionel_has_an_idea.jpg'

const ContentSpacing = styled.section`
  /* grid child styles */
  grid-column-start: 3;
  grid-column-end: 11;
  grid-row-start: 3;
  grid-row-end: 11;
  /* grid parent styles */
  display: grid;
  grid-template-rows: repeat(8, 1fr);
`
const EmptyRow = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
`

const LogoImg = styled.img`
  height: 200px;
  width:auto;
  overflow: hidden;
  border-radius: 200px;
`

const Content = () => {
  return (
    <ContentSpacing>
      <LogoImg src={Logo}/>
      <Blurb />
      <EmptyRow />
      <About />

    </ContentSpacing>
  )
}

export default Content 
