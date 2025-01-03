import styled from "styled-components"

const ContainerCampo = styled.div`
    margin: 10px;
    label {
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
}
input {
    background: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
}
`

function Campo({ type = " text", placeholder, label, aoAlterado, valor, require = "true" }) {
    return (<ContainerCampo>
        <label>{label}: </label>
        <input
        required= {require}
            onChange={(evento) => aoAlterado(evento.target.value)}
            type={type}
            value={valor}
            placeholder={placeholder}
        />
    </ContainerCampo>)
}

export default Campo