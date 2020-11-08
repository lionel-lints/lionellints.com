import styled from 'styled-components'

const Layout = styled.div`
  grid-column-start: 4;
  grid-column-end: 9;
  &:first-child {
    margin: 0;
  }
`
const Sentence = styled.h4`
  font-family: OrpheusProBold;
  font-size: 30px;
  color: #FB6C67;
`

const About = ({ blurb }) => {
  return (
    <Layout>
      {blurb.map((line) => {
        return (
          <Sentence>
            {line}
          </Sentence>
        )
      })}
    </Layout>
  )
}

export default About 
