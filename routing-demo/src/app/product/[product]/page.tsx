export default function Product({ params }: { params: { product: string } }) {
  return (
    <>
      <h1>Details about the Product {params.product}</h1>
    </>
  );
}
