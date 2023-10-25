import { useRouter } from 'next/router';

const Produto = () => {
  const router = useRouter();
  const { item } = router.query;

  // Mapeie os produtos para URLs de imagens
  const imagensDosProdutos = {
    camisa: '',
    calca: 'URL_DA_IMAGEM_DA_CALCA',
    sapato: 'URL_DA_IMAGEM_DO_SAPATO',
    bone: 'URL_DA_IMAGEM_DO_BONE',
    oculos: 'URL_DA_IMAGEM_DO_OCULOS',
  };

  // Verifique se o item recebido na rota é válido
  if (!imagensDosProdutos[item]) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <h1>Produto: {item}</h1>
      <img src={imagensDosProdutos[item]} alt={item} />
    </div>
  );
};

export default Produto;
