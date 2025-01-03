import styled from "styled-components";
import Campo from "../Campo/inde";
import CampoRadio from "../CampoRadio";
import { useState } from "react";
import Botao from "../Botao";


const FormularioContainer = styled.form`
background-color: #e0e0e0;
width: 500px;
margin: 0 auto;

border-radius: 10px;
padding: 20px;

h1{
font-family: "Poppins", serif;
  font-weight: 500;
  font-style: normal;
    text-align: center;
}
h2{
    font-family: "Poppins", serif;
  font-weight: 500;
  font-style: normal;
}
`
function Formulario({ cadastrarColaborador }) {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valorProduto, setValorProduto] = useState('')
    const [disponivel, setDisponivel] = useState('')

    const aoSubmeter = (e) => {
        e.preventDefault()

        setNome('')
        setDescricao('')
        setValorProduto('')
        setDisponivel('')

        console.log(nome, descricao, valorProduto, disponivel)

        cadastrarColaborador({
            nome: nome,
            descricao: descricao,
            valor: valorProduto,
            disponivel: disponivel

        })
    }

    return (
        <FormularioContainer onSubmit={aoSubmeter}>
            <h1>Adicionar Produto</h1>
            <Campo
                label='Nome'
                valor={nome}
                aoAlterado={(valor) => setNome(valor)}
                placeholder='Digite seu nome '
            />
            <Campo
                label='Descrição'
                valor={descricao}
                aoAlterado={(valor) => setDescricao(valor)}
                placeholder='Insira uma descrição'
            />
            <Campo
                label='Valor'
                valor={valorProduto}
                aoAlterado={(valor) => setValorProduto(valor)}
                type="number"
                placeholder='Insira um valor'
            />
            <h2>Está disponível para venda?</h2>
            <CampoRadio
                label='Sim'
                valor='sim'
                checked={disponivel === "sim"}
                aoAlterado={(valor) => setDisponivel(valor)}
            />
            <CampoRadio
                label='Não'
                valor='não'
                checked={disponivel === "não"}
                aoAlterado={(valor) => setDisponivel(valor)}
            />
            <Botao texto='Adicionar produto' />
        </FormularioContainer>
    )
}

export default Formulario;