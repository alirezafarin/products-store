interface IProductPage {
  params: { id: string };
}

export default function ProductPage({ params }: IProductPage) {
  return <div>ID: {params.id}</div>;
}
