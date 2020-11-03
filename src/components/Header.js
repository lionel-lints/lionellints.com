import styled from 'styled-components'

const HeaderElement = styled.header`
  width: 90vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2vh;
  padding-bottom: 1vh;
  margin-left: 5vw;
  margin-right: 5vw;
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
