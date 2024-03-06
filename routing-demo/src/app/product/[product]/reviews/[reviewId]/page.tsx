export default function Review({
  params,
}: {
  params: { product: "string"; reviewId: "string" };
}) {
  return (
    <h1>
      Review {params.reviewId} for product {params.product}
    </h1>
  );
}
