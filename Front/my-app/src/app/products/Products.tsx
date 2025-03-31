//asests
import { products } from "@/helpers/mockProducts";

//componets
import Card from "@/Componets/Card";

const Products: React.FC = () => {
  return (
    <div className="grid  grid-cols-4 gap-4">
      {products.length ? (
        products.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default Products;
