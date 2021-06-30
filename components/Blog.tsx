import styled from "styled-components"

export let BlogContainer = styled.article`
display: flex;
flex-direction: column;
align-items: center;
color: black;
`

export let BlogTitle = styled.h2`
 color:black;
 border: 1px solid black;
 border-radius: 200px;
 
 a {
 color:black;
 opacity: 0.7;
 }
 
  a:hover
   {
    opacity: 1;
  }
`

export let BlogBody = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 150px;
font-size: 20px;
text-align: center;
`