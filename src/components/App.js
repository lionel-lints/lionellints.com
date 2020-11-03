import styled from 'styled-components'

import Content from './Content.js'

const Layout = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  background-color: #f8dfdb;

  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
`

const Header = styled.header`
  width: 90vw;

  /* grid child styles */
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 2;

  display: flex;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 5vw;
`


const App = () => {
  return (
    <Layout>
      <Header>
        <h1>Lionel Lints</h1>
        <h1>Contact</h1>
      </Header>
      <Content />
    </Layout>
  )
}

export default App
