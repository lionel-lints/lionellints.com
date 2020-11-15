import styled from "styled-components"

const StyledImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;

  width: 15vw;
  height: 15vw;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  img {
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
  @media (max-width: 890px) {
    width: 80vw;
    height: 80vw;
    margin-bottom: 20px;
  }
`

const Image = ({ src, alt }) => {
  return (
    <StyledImage>
      <img src={src} alt={alt} />
    </StyledImage>
  )
}

export default Image
