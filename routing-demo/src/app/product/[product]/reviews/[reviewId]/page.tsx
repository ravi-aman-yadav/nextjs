"use client";

function getRandomInteger(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Review({
  params,
}: {
  params: { product: "string"; reviewId: "string" };
}) {
  const random = getRandomInteger(2);
  if (random === 1) {
    throw new Error("Error Loading Review");
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.product}
    </h1>
  );
}
