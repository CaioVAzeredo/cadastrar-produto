import styled from "styled-components"

const ContainerCampo = styled.div`
    margin: 10px;
    font-size: 24px;
    input{
        margin-right: 10px;
    }
`

function CampoRadio({ type = "radio", valor, checked, label, aoAlterado}) {
    return (<ContainerCampo>
        <label>
            <input
                type={type}
                value={valor}
                checked={checked}
                onChange={(evento) => aoAlterado(evento.target.value)}
            />
            {label}
        </label>
    </ContainerCampo>)
}

export default CampoRadio