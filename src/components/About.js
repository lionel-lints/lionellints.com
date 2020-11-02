import styled from 'styled-components'

const Layout = styled.div`
  grid-row-start: 3;
  grid-row-end: 9;
`
const Sentence = styled.p`
  font-family: BeatriceLightItalic;
  font-size: 20px;
  color: black;
  margin: 15px;
`

const About = () => {
  return (
    <Layout>
      <Sentence>
        He leads development teams to envision and build extensible, scalable applications and reliable, distributed web systems.
      </Sentence>
      <Sentence>
        Primarily he loves working with teams of smart people who want to think deeply and  have fun solving interesting business problems with technology.
      </Sentence>
      <Sentence>
        He's taught many, many students about web development and loves to teach and mentor others.
      </Sentence>
      <Sentence>
        He's most at home building complex interfaces that help make deep learning and artificial intelligence useable and meaningful.
      </Sentence>
    </Layout>
  )
}

export default About 

