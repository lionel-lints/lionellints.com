import styled from 'styled-components'

import Section from './Section.js'

const StyledSection = styled(Section)`
  height: auto;
  /* grid parent styles */
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`

const StyledTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FB6C67;
  h1 {
    font-family: OrpheusPro;
  }
  h2 {
    font-family: OrpheusProItalic;
    margin: 3px;
  }
`

const StyledBlurb = styled.div`
  grid-column-start: 4;
  grid-column-end: 9;
  color: #121111;
  font-family: OrpheusProMedium;
  font-size: 24px;
`
const Experience = ({ company, role, dates, blurb }) => {
  return (
    <StyledSection>
      <StyledTitle>
        <h1>{company}</h1>
        <h2>{role}</h2>
        <h2>{dates}</h2>
      </StyledTitle>
      <StyledBlurb>
        {blurb}
      </StyledBlurb>
    </StyledSection>
  )
}
export default Experience 
