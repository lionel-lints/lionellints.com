import styled from 'styled-components'

const Layout = styled.h2`
  font-family: BeatriceSemiboldItalic;
  color: #d7c1c1;
  grid-row-start: 1;
  grid-row-end: 2;
`

const Blurb = () => {
  return (
    <Layout>
      Lionel Lints is a Los Angeles-based software engineer and educator.
    </Layout>
  )
}

export default Blurb
