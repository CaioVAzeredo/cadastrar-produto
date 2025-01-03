import styled from "styled-components"

const BotaoContainer = styled.button`
    font-family: "Poppins", sans-serif;
color: white;
padding: 10px;
background-color: #041833;
border: none;
border-radius: 5px;
margin: 10px 160px;
cursor: pointer;
padding: 10px 25px;
`

function Botao({ texto, onClick }) {
    return (<BotaoContainer onClick={onClick}>{texto}</BotaoContainer>)
}

export default Botao

