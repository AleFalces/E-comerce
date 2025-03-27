//asests
import { products } from "@/helpers/mockProducts";

//componets
import Card from "@/Componets/Card";

const SlugProducts: React.FC = ({ params }) => {
  return (
    <div>
      Soy el detalle:{params.slug}
      {products.map((product) => (
        <Card key={product.id}></Card>
      ))}
    </div>
  );
};

export default SlugProducts;
