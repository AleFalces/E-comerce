//asests
import { products } from "@/helpers/mockProducts";

//componets
import Card from "@/Componets/Card";

const SlugProducts: React.FC = () => {
  return (
    <div>
      Soy el detalle:
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default SlugProducts;
