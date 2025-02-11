import { Metadata } from "next";

type Props = {
  params: Promise<{ productID: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productID;

  return {
    title: `Product id is${id}`,
  };
};

export default async function ProductId({ params }: Props) {
  const ProductI = (await params).productID;

  return <div>product id is {ProductI}</div>;
}
