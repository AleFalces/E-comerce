import Card from "@/Componets/Card";

const SlugProducts: React.FC = ({ params }) => {
  return (
    <div>
      Soy el detalle:{params.slug}
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default SlugProducts;
