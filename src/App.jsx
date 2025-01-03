import styled from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Formulario from './componentes/Formulario'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Produto from './componentes/Produto';

const Fundo = styled.div`
font-family: "Poppins", serif;
  background: #041833;
width: 100%;
min-height: 100vh;
padding-top: 100px;
padding-bottom: 100px;
`
const ContainerProduto = styled.div`
    background-color: #e0e0e0;
width: 500px;
margin: 20px auto;
border-radius: 10px;
padding: 20px;

h1{
  font-family: "Poppins", serif;
  font-weight: 500;
  font-style: normal;
    text-align: center;
}
`
function App() {
  const [produtos, setProduto] = useState([
    {
      id: uuidv4(),
      nome: 'Caneta Esferográfica',
      descricao: 'Caneta com tinta azul, ponta 1.0mm, confortável para escrita prolongada.',
      valor: 3.50,
      disponivel: 'sim'
    },
    {
      id: uuidv4(),
      nome: 'Mochila Escolar',
      descricao: 'Mochila resistente, com compartimento para notebook e design ergonômico.',
      valor: 120.00,
      disponivel: 'não'
    },
    {
      id: uuidv4(),
      nome: 'Garrafa Térmica',
      descricao: 'Garrafa térmica de 500ml, mantém líquidos quentes ou frios por até 12 horas.',
      valor: 45.00,
      disponivel: 'sim'
    },
    {
      id: uuidv4(),
      nome: 'Fone de Ouvido Bluetooth',
      descricao: 'Fone sem fio com cancelamento de ruído e bateria de longa duração.',
      valor: 150.00,
      disponivel: 'não'
    }
  ])

  function AdicionarProduto(novoProduto) {
    setProduto([...produtos, novoProduto])
  }

  function aoDeletarProduto(id) {
    setProduto(
      produtos.filter(produto => produto.id !== id)
    )
  }
  return (
    <Fundo>
      <EstilosGlobais />
      <Formulario cadastrarColaborador={AdicionarProduto} />
      <ContainerProduto>
        <h1>Produtos</h1>
        <Produto
          produtos={produtos}
          aoDeletar={aoDeletarProduto}
        />
      </ContainerProduto>
    </Fundo>
  )
}

export default App
