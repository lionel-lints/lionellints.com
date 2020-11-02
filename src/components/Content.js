import styled from 'styled-components'

import Blurb from './Blurb.js'
import About from './About.js'

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

const Content = () => {
  return (
    <ContentSpacing>
      <Blurb />
      <EmptyRow />
      <About />
    </ContentSpacing>
  )
}

export default Content 
