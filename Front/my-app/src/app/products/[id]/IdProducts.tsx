import { IProductPageProps } from "@/interfaces/detailProductInterface";

const IdProducts = ({ id, searchParams }: IProductPageProps) => {
  const { name, description, price, image } = searchParams;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      {image && <img src={image} alt={name} />}
    </div>
  );
};

export default IdProducts;
