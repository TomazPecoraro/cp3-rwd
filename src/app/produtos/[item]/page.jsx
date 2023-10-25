import Image from "next/image";
export default async function ProdutoID({params}) {

  const response = await fetch("http://localhost:3000/dados/produto-api");
  const produtos = await response.json();

  const produto = produtos.find(produto => produto.id == params.id);


  return (
    <div>
        <h1>Identificação das Produtos</h1>
        <p>Valor do ID : {params.id}</p>
        <p>Nome do produto: {produto.nome}</p>
        <p>Descrição do produto: {produto.desc}</p>
        <Image src= {params.Image} alt="Imagem" width={750} height={600}/>

    </div>
  )
}
