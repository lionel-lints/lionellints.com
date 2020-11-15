import styled from "styled-components"

const Layout = styled.div`
  grid-column-start: 4;
  grid-column-end: 9;
  &:first-child {
    margin: 0;
  }
  @media (max-width: 890px) {
    grid-column-start: 1;
  }
`
const Sentence = styled.h4`
  font-family: OrpheusProBold;
  font-size: 28px;
  color: #fb6c67;
  margin-top: 0;
  @media (max-width: 890px) {
    :last-of-type {
      margin-bottom: 0;
    }
  }
`

const About = ({ blurb }) => {
  return (
    <Layout>
      {blurb.map((line, i) => {
        return <Sentence key={i}>{line}</Sentence>
      })}
    </Layout>
  )
}

export default About
