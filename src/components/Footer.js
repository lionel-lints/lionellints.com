import styled from "styled-components";

import { GetInTouch } from "./EmailLink.js";

const StyledFooter = styled.footer`
  margin-left: 10vw;
  margin-right: 10vw;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  div {
    grid-column-start: 4;
    grid-column-end: 9;
  }
  @media (max-width: 890px) {
    height: 80px;
    div {
      grid-column-start: 1;
    }
  }
`;

const Footer = ({ href, text }) => {
  return (
    <StyledFooter>
      <GetInTouch />
    </StyledFooter>
  );
};

export default Footer;
