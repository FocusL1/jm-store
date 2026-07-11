import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Brands from "../components/home/Brands";
import PromoBanner from "../components/home/PromoBanner";
import FlashDeals from "../components/home/FlashDeals";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Brands />
        <PromoBanner />
        <FlashDeals />
      </main>
    </>
  );
}