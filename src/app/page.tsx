import Header from "./components/header";
import Banner from "./components/banner";
import SmallerBanner from "./components/smaller_banner";
import Products from "./components/product";
import Category from "./components/category";
import SecondBanners from "./components/secondBanners";
import DiscountProduct from "./components/discountProduct";
import Footer from "./components/footer";
import ThirdBanner from "./components/thirdBanner";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <SmallerBanner/>
      <Products/>
      <Category/>
      <SecondBanners/>
      <DiscountProduct/>
      <ThirdBanner/>
      <Footer/>
    </>
  );
}
