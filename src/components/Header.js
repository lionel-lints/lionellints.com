import styled from "styled-components";

import { ContactMe } from "./EmailLink.js";

const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2vh;
  padding-bottom: 1vh;
  padding-left: 5vw;
  padding-right: 5vw;

  top: 0;
  z-index: 1;

  h2 {
    font-family: OrpheusProBold;
    color: #fb6c67;
  }
  h3 {
    font-family: OrpheusPro;
    font-size: 16px;
  }
`;

const Header = ({ name }) => {
  return (
    <HeaderElement>
      <h2>{name}</h2>
      <h3>
        <ContactMe />
      </h3>
    </HeaderElement>
  );
};

export default Header;
