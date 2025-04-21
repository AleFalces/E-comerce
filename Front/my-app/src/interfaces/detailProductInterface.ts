export interface IProductPageProps {
  id: string;

  searchParams: {
    name?: string;
    price?: string;
    description?: string;
    image?: string;
  };
}
