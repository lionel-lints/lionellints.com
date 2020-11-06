import styled from 'styled-components'

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

  border-bottom: 1px solid aliceblue;

  h2 {
    font-family: OrpheusProBold;
    color: #FB6C67;
  }
  a h2 {
    color: #121111;
    cursor: pointer;
  }
`

const Header = ({ name }) => {
  return (
    <HeaderElement>
      <h2>{name}</h2>
      <a><h2>Contact Me</h2></a>
    </HeaderElement>
  )
}

export default Header
