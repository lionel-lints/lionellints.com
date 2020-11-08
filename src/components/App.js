import styled from 'styled-components'

import Experience from './Experience.js'
import Header from './Header.js'
import List from './List.js'
import Section from './Section.js'
import Splash from './Splash.js'

import LionelImg from '../assets/lionel_has_an_idea.jpg'


const Layout = styled.div`
  width: 100vw;
  background-color: #f8dfdb;
`

const MainContent = styled.main`
  margin-left: 10vw;
  margin-right: 10vw;
`

const data = {
  firstName: 'Lionel',
  lastName: 'Lints',
  image: LionelImg,
  imageAlt: 'Lionels Profile',
  aboutBlurb: [
        'Lionel Lints is a software engineer and educator.',
        'He leads development teams to envision and build extensible, scalable applications and reliable, distributed web systems.',
        'He\'s taught many, many students about web development and loves to teach and mentor others. He\'s most at home building complex interfaces that help make deep learning and artificial intelligence useable and meaningful.'
  ],
  technologies: ['Javascript', 'Python', 'Ruby','React', 'Django', 'Rails', 'Angular', 'Flask', 'SQL', 'Node','Express', 'Docker'],
  interests:  ['Surfing', 'Rock Climbing', 'Chess', 'Bridge', 'Zen', 'Guitar','Experimental Writing', 'Coffee'] ,
  experiences: [
    {
      company: 'Echo Echo',
      role: 'CTO',
      dates: '2019 -> Present',
      blurb: 'Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.',
    },
    {
      company: 'Enlitic',
      role: 'Senior Software Engineer',
      dates: '2017 -> 2019',
      blurb: 'Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.Lionel did some stuff here.',
    },
    {
      company: 'Galvanize',
      role: 'Web Development Instructor & Software Engineer',
      dates: '2016 -> 2017',
      blurb: `Lionel lectured and ran classes for subjects including: JavaScript, NodeJS/Express, React, AngularJS, SQL, Rails, Python, and data structures & algorithms (among others). He built an internal application that used Express, Postgres, React, and Redux to allow instructors to track and support the learning and development of other instructors. He worked on the development team to grow the learning management system using Rails and React.`
    }
  ]
}

const LinkedinLink = styled.a`
`

const App = () => {
  return (
    <Layout>
      <Header name={`${data.firstName} ${data.lastName}`}/>
      <MainContent>
        <Splash src={data.image} alt={data.imageAlt} aboutBlurb={data.aboutBlurb} />
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
