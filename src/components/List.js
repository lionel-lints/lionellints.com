import styled from 'styled-components'

import Section from './Section.js'

const StyledSection = styled(Section)`
  height: 200px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

const StyledTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-family: OrpheusPro;
    color: #FB6C67;
    font-size: 28px;
  }
`

const StyledContent = styled.div`
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;

  div {
    font-family: OrpheusProMedium;
    color: #FB6C67;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`


const List = ({ title, list }) => {
  return (
    <StyledSection>
      <StyledTitle>
        <h3>{title}</h3>
      </StyledTitle>
      <StyledContent>
        {list.map((item) => <div>{item}</div>)}
      </StyledContent>
    </StyledSection>
  )
}

export default List
