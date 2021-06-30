import styled from "styled-components";

export const NewPostContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:70vh;
text-align: center;

label, input, textarea, button {
padding: 10px;
border-radius: 10px;
}

button {
color: white;
background: darkolivegreen;
margin-top: 20px;
cursor: pointer;
}

button:hover {
background: green;

}
`


export const SuccessMessage = styled.div`
margin-top: 20px;
padding: 20px;
border-radius: 10px;
width: 35%;
text-align: center;
background: green;
color: black;
font-weight: bold;
font-size: 26px;
`

