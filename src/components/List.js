import styled from "styled-components"

import Section from "./Section.js"

const StyledSection = styled(Section)`
  height: 200px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media (max-width: 890px) {
    height: auto;
    grid-template-rows: 62px;
  }
`

const StyledTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  h3 {
    font-family: OrpheusPro;
    color: #fb6c67;
    font-size: 26px;
    margin: 0;
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
    font-family: OrpheusPro;
    color: #fb6c67;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 890px) {
    grid-column-start: 1;
    grid-row-start: 2;
  }
`

const List = ({ title, list }) => {
  return (
    <StyledSection>
      <StyledTitle>
        <h3>{title}</h3>
      </StyledTitle>
      <StyledContent>
        {list.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </StyledContent>
    </StyledSection>
  )
}

export default List
