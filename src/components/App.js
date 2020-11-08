import styled from 'styled-components'

import data from '../assets/data.json'
import LionelImg from '../assets/lionel_has_an_idea.jpg'

import Experience from './Experience.js'
import Header from './Header.js'
import List from './List.js'
import Section from './Section.js'
import Splash from './Splash.js'

const Layout = styled.div`
  width: 100vw;
  background-color: #f8dfdb;
`

const MainContent = styled.main`
  margin-left: 10vw;
  margin-right: 10vw;
`

const App = () => {
  return (
    <Layout>
      <Header name={`${data.firstName} ${data.lastName}`}/>
      <MainContent>
        <Splash src={LionelImg} alt={data.imageAlt} aboutBlurb={data.aboutBlurb} />
        <List title={'Technologies'} list={data.technologies} />
        <List title={'Fun Stuff'} list={data.interests} />
        { data.experiences.map((exp, i) => {
          return (
            <Experience
              key={i}
              blurb={exp.blurb}
              company={exp.company}
              role={exp.role}
              dates={exp.dates}
            />
          )
        }) }
        <Section>
          <a>More on Linkedin</a>
        </Section>
      </MainContent>
      {/* Footer GET IN TOUCH link */}
    </Layout>
  )
}

export default App
