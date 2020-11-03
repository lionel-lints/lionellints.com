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


const App = () => {
  return (
    <Layout>
      <Header name="Lionel Lints"/>
      <MainContent>
        <Splash />
        <Section>
          {/* Techologies Title */}
          {/* Techologies Content */}
        </Section>
        <Section>
          {/* Interests Title */}
          {/* Interests Content */}
        </Section>
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
