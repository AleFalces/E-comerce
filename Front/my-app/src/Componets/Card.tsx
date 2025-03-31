import { CardProps } from "@/helpers/mockProducts";

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div>
      <div>name: {product.name}</div>
      <div>price: {product.price}</div>
      <div>{product.description}</div>
      <img src={product.image} alt={product.name} />
      <div>categoryId: {product.categoryId}</div>
      <div>stock: {product.stock}</div>
    </div>
  );
};

export default Card;
