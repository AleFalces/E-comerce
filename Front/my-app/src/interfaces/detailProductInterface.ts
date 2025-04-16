export interface IProductPageProps {
  params: {
    id: string;
  };
  searchParams: {
    name?: string;
    price?: string;
    description?: string;
    image?: string;
  };
}
