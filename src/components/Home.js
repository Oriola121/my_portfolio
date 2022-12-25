import React from 'react'
import styled from 'styled-components'
import Lefty from './Lefty'
import Ritey from './Ritey'


function Home() {
  return (
    <Homecont>
      <HomeWrap>
        <Homeleft><Lefty/></Homeleft>
        <Homerite><Ritey/></Homerite>
      </HomeWrap>
    </Homecont>
  )
}

export default Home

const Homecont = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #120305;


`
const HomeWrap =styled.div`
width: 98%;
height: 95%;
background-color: #191923;
display: flex;
justify-content: space-between;
// align-items: center;

// @media screen {max-width: 798px;
//   display: flex;
//   flex-direction: column;
//   // justify-content: center;
//   // align-items: center;
// }
`
const Homeleft = styled.div`
width: 25%;
height: 100%;
`
const Homerite = styled.div`
width: 75%;
height: 100%;
`