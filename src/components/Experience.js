import styled from "styled-components";

import Section from "./Section.js";

const StyledSection = styled(Section)`
  height: auto;
  /* grid parent styles */
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const StyledTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fb6c67;
  padding-right: 25%;
  h1 {
    font-family: OrpheusPro;
    font-size: 26px;
    margin: 0;
  }
  h2 {
    font-family: OrpheusPro;
    font-size: 16px;
    margin: 3px;
  }
  @media (max-width: 890px) {
    grid-column-start: 1;
    grid-column-end: 9;
    h2 {
      margin: 3px 0;
    }
  }
`;

const StyledBlurb = styled.div`
  grid-column-start: 4;
  grid-column-end: 9;
  color: #121111;
  font-family: OrpheusPro;
  font-size: 20px;
  @media (max-width: 890px) {
    grid-column-start: 1;
    grid-column-end: 9;
  }
`;
const Experience = ({ company, role, dates, blurb }) => {
  return (
    <StyledSection>
      <StyledTitle>
        <h1>{company}</h1>
        <h2>{role}</h2>
        <h2>{dates}</h2>
      </StyledTitle>
      <StyledBlurb>{blurb}</StyledBlurb>
    </StyledSection>
  );
};
export default Experience;
