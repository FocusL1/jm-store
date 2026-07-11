import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";

import { products } from "@/data/products";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-black min-h-screen py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            <ProductGallery
              images={product.gallery ?? [product.image]}
              productName={product.name}
            />

            <ProductInfo product={product} />

          </div>

          <RelatedProducts
            currentProduct={product}
            products={products}
          />

        </div>

      </main>
    </>
  );
}