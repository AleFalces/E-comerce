//asests
import { products } from "@/helpers/mockProducts";

//componets
import Card from "@/Componets/Card";

const Products: React.FC = () => {
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id}></Card>
      ))}
    </div>
  );
};

export default Products;
