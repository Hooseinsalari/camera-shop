// components
import Header from "../components/HomePage/Header";
import ProductsSlider from "../components/HomePage/ProductsSlider";

// styles
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles["home"]}>
      <Header />
      <ProductsSlider />
    </div>
  );
};

export default HomePage;
