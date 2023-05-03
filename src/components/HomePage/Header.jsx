// components
import CenterSlider from "./CenterSlider";
import Filter from "./Filter";

// styles
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Filter />
      <CenterSlider />
    </div>
  );
};

export default Header;
