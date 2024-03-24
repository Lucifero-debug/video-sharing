import React from 'react'
import styled from "styled-components"

const Container=styled.div `
display: flex;
gap: 10px;
margin: 20px 0px;
`
const Avatar=styled.img `
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Details=styled.div `
display: flex;
flex-direction: column;
gap: 10px;
color: ${({theme}) => theme.text};
`
const Name=styled.span `
font-size: 13px;
font-weight: 500;
`
const Date=styled.span `
font-size: 12px;
font-weight: 400;
color: ${({theme}) => theme.textSoft};
margin-left: 5px;
`
const Text=styled.span `
font-size: 14px;
`

function Comment() {
  return (
    <Container>
      <Avatar src='https://th.bing.com/th/id/OIP.HCQMszN0FMcrNNET3aDQpgHaFj?rs=1&pid=ImgDetMain'/>
      <Details>
        <Name>Adolf Hitler <Date>1 Day ago</Date> </Name>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa molestiae excepturi optio rem esse suscipit illum! Nostrum assumenda non ullam natus laboriosam. At, quam atque.</Text>
      </Details>
    </Container>
  )
}

export default Comment
