import Image from "next/image";

export default async function ProdutoID({ params }) {
  const response = await fetch("http://localhost:3000/dados/produto-api");
  const produtos = await response.json();

  const prod = produtos.find(produto => produto.id == params.id);

  return (
    <div>
      <h1>Identificação dos Produtos</h1>
      <p>Valor do ID: {params.id}</p>
      <p>Nome do produto: {prod.item}</p>
      <p>Descrição do produto: {prod.desc}</p>
      <Image src={prod.imagem} alt="Imagem" width={750} height={600} />
    </div>
  );
}