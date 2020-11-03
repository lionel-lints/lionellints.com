import styled from 'styled-components'

const StyledImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;

  width: 20vw;
  height: 20vw;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  img {
    margin: 0 auto;
    height: 100%;
    width: auto;
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
