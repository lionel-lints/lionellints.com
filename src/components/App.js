import styled from "styled-components";

// Assets
import data from "../assets/data.json";
import lionelImg from "../assets/lionel_has_an_idea.jpg";

// Components
import Experience from "./Experience.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import List from "./List.js";
import Splash from "./Splash.js";

const Layout = styled.div`
  background-color: #f8dfdb;
`;

const MainContent = styled.main`
  margin-left: 10vw;
  margin-right: 10vw;
`;

const StyledLinkedinSection = styled.section`
  height: 100px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  a {
    grid-column-start: 4;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;
    text-decoration: none;
    font-family: OrpheusPro;
    font-size: 20px;
    color: #fb6c67;
    :hover {
      opacity: 60%;
    }
  }
  @media (max-width: 890px) {
    height: auto;
    a {
      grid-column-start: 1;
    }
  }
`;
const App = () => {
  return (
    <Layout>
      <Header name={`${data.firstName} ${data.lastName}`} />
      <MainContent>
        <Splash
          src={lionelImg}
          alt={data.imageAlt}
          aboutBlurb={data.aboutBlurb}
        />
        <List title={"Technologies"} list={data.technologies} />
        <List title={"Fun Stuff"} list={data.interests} />
        {data.experiences.map((exp, i) => {
          return (
            <Experience
              key={i}
              blurb={exp.blurb}
              company={exp.company}
              role={exp.role}
              dates={exp.dates}
            />
          );
        })}
        <StyledLinkedinSection>
          <a href={data.linkedinLink}>More on Linkedin</a>
        </StyledLinkedinSection>
      </MainContent>
      <Footer />
    </Layout>
  );
};

export default App;
