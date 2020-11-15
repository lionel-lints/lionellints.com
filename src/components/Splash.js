import styled from 'styled-components'

import Section from './Section.js'
import Image from './Image.js'
import About from './About.js'


const SplashSection = styled(Section)`
  height: auto;
  /* grid parent styles */
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`

const Splash = ({ src, alt, aboutBlurb }) => {
  return (
    <SplashSection>
      <Image src={src} alt={alt} />
      <About blurb={aboutBlurb} />
    </SplashSection>
  )
}

export default Splash
