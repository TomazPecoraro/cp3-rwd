import { useRouter } from 'next/router';
import ProdutoItem from '../../components/ProdutoItem'; // Importe o componente ProdutoItem

const Produto = () => {
  const router = useRouter();
  const { item } = router.query;

  return (
    <div>
      <h1>Produto: {item}</h1>
      <ProdutoItem item={item} />
    </div>
  );
};

export default Produto;
