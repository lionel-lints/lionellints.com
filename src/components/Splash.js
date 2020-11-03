import styled from 'styled-components'

import LionelImg from '../assets/lionel_has_an_idea.jpg'

import Section from './Section.js'
import Image from './Image.js'
import About from './About.js'


const SplashSection = styled(Section)`
  height: auto;
  /* grid parent styles */
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`

const Splash = () => {
  return (
    <SplashSection>
      <Image src={LionelImg} alt="Lionel's profile"/>
      <About />
    </SplashSection>
  )
}
export default Splash
