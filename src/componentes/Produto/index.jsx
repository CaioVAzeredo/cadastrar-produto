import ImgDel from "../../assets/imagens/remove.png"
import styled from "styled-components"
const CampoProdutos = styled.div`
font-family: "Poppins", serif;
  font-weight: 500;
  font-style: normal;
    text-align: center;
    
display: flex;
gap: 30px;
justify-content: center;
list-style: none;

img{
    width: 13px;
    margin-left: 20px;
    cursor: pointer;
}
div{
    text-align: center;
    padding: 10px;
}
li{
margin: 10px;
}

`
function Produto({ produtos, aoDeletar }) {


    return (<CampoProdutos>
        <div>
            <h1>Nome</h1>
            <lu>
                {produtos.map(produto => <li>{produto.nome}</li>)}
            </lu>
        </div>
        <div>
            <h1>Valor</h1>
            <lu>
                {produtos.map(produto =>
                    <li>
                        R$ {produto.valor}
                        <img src={ImgDel} onClick={() => aoDeletar(produto.id)} />
                    </li>
                )}
            </lu>
        </div>

    </CampoProdutos>)
}

export default Produto