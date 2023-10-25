import Image from "next/image";

export default async function ProdutoID({params}) {



    const response = await fetch("http://localhost:3000/dados/produto-api");
    const produtos = await response.json();
  
    const produto = produtos.find(produto => produto.item == params.item);
  
  
    return (
      <div>
          <h1>Identificação dos Itens</h1>
          <p>Valor do ID : {params.item}</p>
          <Image src= {params.Image} alt="Gato" width={750} height={600}/>
      </div>
    )
  }