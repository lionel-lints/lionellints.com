import styled from 'styled-components'

import Header from './Header.js'
import Splash from './Splash.js'

import Section from './Section.js'

const Layout = styled.div`
  width: 100vw;
  background-color: #f8dfdb;
`

const MainContent = styled.main`
  margin-left: 10vw;
  margin-right: 10vw;
`

const StyledTechSection = styled(Section)`
  height: 200px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

const StyledTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-family: OrpheusPro;
    color: #FB6C67;
    font-size: 28px;
  }
`

const StyledContent = styled.div`
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;

  div {
    font-family: OrpheusProMedium;
    color: #FB6C67;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

const data = {
  firstName: 'Lionel',
  lastName: 'Lints',
  technologies: ['Javascript', 'Python', 'Ruby','React', 'Django', 'Rails', 'Angular', 'Flask', 'SQL', 'Node','Express', 'Docker'],
  interests:  ['Surfing', 'Rock Climbing', 'Chess', 'Bridge', 'Zen', 'Guitar','Experimental Writing', 'Coffee'] ,
  experience: [
    {
      company: 'Echo Echo',
      role: 'CTO',
      dates: '2019-Present',
      blurb: 'Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.',
    },
    {
      company: 'Enlitic',
      role: 'Senior Software Engineer',
      dates: '2017-2019',
      blurb: 'Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.',
    },
    {
      company: 'Galvanize',
      role: 'Web Development Instructor & Software Engineer',
      dates: '2016-2017',
      blurb: 'Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.',
    }
  ]
}

const App = () => {
  return (
    <Layout>
      <Header name={`${data.firstName} ${data.lastName}`}/>
      <MainContent>
        <Splash />
        <StyledTechSection>
          <StyledTitle>
            <h3>Technologies</h3>
          </StyledTitle>
          <StyledContent>
            {data.technologies.map((item) => <div>{item}</div>)}
          </StyledContent>
        </StyledTechSection>
        <StyledTechSection>
          <StyledTitle>
            <h3>Fun Stuff</h3>
          </StyledTitle>
          <StyledContent>
            {data.interests.map((item) => <div>{item}</div>)}
          </StyledContent>
        </StyledTechSection>
        <Section>
          {/* Echo Echo Title */}
          {/* Echo Echo Content */}
        </Section>
        <Section>
          {/* Enlitic Title */}
          {/* Enlitic Content */}
        </Section>
        <Section>
          {/* Galvanize Title */}
          {/* Galvanize Content */}
        </Section>
        <Section>
          {/* More on linkedin link */}
        </Section>
      </MainContent>
      {/* Footer GET IN TOUCH link */}
    </Layout>
  )
}

export default App
