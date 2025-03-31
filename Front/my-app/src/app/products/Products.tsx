//asests
import { products } from "@/helpers/mockProducts";

//componets
import Card from "@/Componets/Card";

const Products: React.FC = () => {
  return (
    <div>
      {products.map((prod) => (
        <Card key={prod.id} product={prod}></Card>
      ))}
    </div>
  );
};

export default Products;
