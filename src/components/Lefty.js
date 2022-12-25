import React from 'react'
import styled from 'styled-components'
import L1 from './L1'
import L2 from './L2'



function Lefty() {
  return (
    <Leftcont>
      <Leftwrap>
        <La><L1/></La>
        <Lb><L2/></Lb>
        <Lc></Lc>
      </Leftwrap>
    </Leftcont>
  )
}

export default Lefty
const Leftcont = styled.div`
width: 100%;
height: 100%;
background-color: #23232D;
color: #fff;
`
const Leftwrap = styled.div`
width: 100%;
height: 100%;
`
const La = styled.div`
width: 100%;
height: 35%;
`
const Lb = styled.div`
width: 100%;
height: 60%;
background-color: #1F1F29;

`
const Lc = styled.div`
width: 100%;
height: 15%;
`