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

const About = () => {
  return (
    <Layout>
      <Sentence>
        Lionel Lints is a software engineer and educator.
      </Sentence>
      <Sentence>
        He leads development teams to envision and build extensible, scalable applications and reliable, distributed web systems.
      </Sentence>
      <Sentence>
        He's taught many, many students about web development and loves to teach and mentor others. He's most at home building complex interfaces that help make deep learning and artificial intelligence useable and meaningful.
      </Sentence>
    </Layout>
  )
}

export default About 
