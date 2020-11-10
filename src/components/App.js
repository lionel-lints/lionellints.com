import styled from 'styled-components'

// Assets
import data from '../assets/data.json'
import lionelImg from '../assets/lionel_has_an_idea.jpg'

// Components
import Experience from './Experience.js'
import Footer from './Footer.js'
import Header from './Header.js'
import List from './List.js'
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
      <Header name={`${data.firstName} ${data.lastName}`} />
      <MainContent>
        <Splash src={lionelImg} alt={data.imageAlt} aboutBlurb={data.aboutBlurb} />
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
        <a href={data.linkedinLink}>
          More on Linkedin
        </a>
      </MainContent>
        <Footer />
    </Layout>
  )
}

export default App
