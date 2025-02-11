import Link from "next/link";
import React from "react";

const ProductHome = () => {
  const productId = 300;
  return (
    <div>
      ProductHome
      <Link href={`/product/${productId}`}>Product id</Link>
    </div>
  );
};

export default ProductHome;
