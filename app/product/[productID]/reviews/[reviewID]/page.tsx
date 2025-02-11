import React from "react";

const ReviewsId = async ({
  params,
}: {
  params: Promise<{ productID: string; reviewID: string }>;
}) => {
  const { productID, reviewID } = await params;
  return (
    <div>
      Review {reviewID} of Product {productID}
    </div>
  );
};

export default ReviewsId;
