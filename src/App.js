import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
import Home from './components/Home'


function App() {
  return (
    <Appcont>
      <GlobalStyle/>
        <Home/>
    </Appcont>
  )
}

export default App

const Appcont = styled.div`

`