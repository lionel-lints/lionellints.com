import styled from "styled-components"
import Obfuscate from "react-obfuscate"

const StyledGetInTouchAnchor = styled(Obfuscate)`
  color: #fb6c67;
  text-decoration: none;
  border-bottom: 2px solid #fb6c67;
  font-family: OrpheusPro;
  font-size: 64px;
  :hover {
    opacity: 60%;
  }
  @media (max-width: 890px) {
    font-size: 40px;
  }
`

const StyledContactAnchor = styled(Obfuscate)`
  color: #121111;
  text-decoration: none;
  font-family: OrpheusPro;
  :hover {
    opacity: 60%;
  }
`

export const GetInTouch = () => {
  return (
    <div>
      <StyledGetInTouchAnchor
        email="hello@lionellints.com"
        headers={{
          subject: "Hello there!",
          body: "Hi Lionel, ... :)"
        }}
      >
        Get in Touch
      </StyledGetInTouchAnchor>
    </div>
  )
}

export const ContactMe = () => {
  return (
    <StyledContactAnchor
      email="hello@lionellints.com"
      headers={{
        subject: "Hello there!",
        body: "Hi Lionel, ... :)"
      }}
    >
      Contact Me
    </StyledContactAnchor>
  )
}
