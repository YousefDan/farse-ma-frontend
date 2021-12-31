import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Shipping from "../components/shipping/Shipping";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products title="پرفروش ترین فرش های 12 متری" />
      <Shipping />
    </>
  );
};

export default Home;
