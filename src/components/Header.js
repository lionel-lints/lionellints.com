import styled from 'styled-components'

import { ContactMe } from './EmailLink.js'

const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2vh;
  padding-bottom: 1vh;
  padding-left: 5vw;
  padding-right: 5vw;

  position: sticky;
  top: 0;
  background-color: #f1d5d0;
  z-index: 1;
  opacity: 80%;

  border-bottom: 1px solid aliceblue;

  h2 {
    font-family: OrpheusProBold;
    color: #FB6C67;
  }
`

const Header = ({ name }) => {
  return (
    <HeaderElement>
      <h2>{name}</h2>
      <h2><ContactMe /></h2>
    </HeaderElement>
  )
}

export default Header
