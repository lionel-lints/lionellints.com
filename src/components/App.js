import styled from 'styled-components'

import Content from './Content.js'

const Layout = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  background-color: #f9f5f1;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
`


const App = () => {
  return (
    <Layout>
      <Content />
      {/*   Blurb */}
      {/*   Empty line */}
      {/*   About me */}
    </Layout>
  )
}

export default App
