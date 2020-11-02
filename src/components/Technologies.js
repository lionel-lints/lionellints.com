import styled from 'styled-components'

const Sentence = styled.p`
  font-family: BeatriceLight;
  font-size: 20px;
  color: black;
  margin: 15px;
`
const Technologies = () => {
  return (
    <>
      <Sentence>
        Lionel has worked with quite a few different web technologies, including: Javascript (Node, React, Angular, Express), Python (Django, Flask), Ruby (Rails), SQL, NoSQL and others.
      </Sentence>
      <Sentence>
        Most recently he has designed and built an application using React, Django, and Postgres which were deployed on AWS with Docker containers.
      </Sentence>
    </>
  )
}

export default Technologies 

