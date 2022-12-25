import React from 'react'
import styled from 'styled-components'
import Gold from '../images/ori.jpg'

function L1() {
  return (
    <L1cont>
      <img src={Gold} className='goldie'/>
      <Ori>muhibudeen abdurrahman oriola</Ori>
      <Abt>frontend developer</Abt>
    </L1cont>
  )
}

export default L1
const L1cont = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.goldie {
  width: 200px;
  height: 180px;
  border-radius: 50%;
}
`
const Ori = styled.div`
margin-top: 10px;
margin-bottom: 5px;
text-transform: uppercase;
font-family: Segoe UI;
font-weight: 700;
text-decorattion: none solid rgb(128, 128, 128);
`
const Abt = styled.div`
text-transform: uppercase;
font-family: Segoe UI;
// font-weight: 700;
color: rgb(128, 128, 128);
text-decorattion: none solid rgb(128, 128, 128);
`