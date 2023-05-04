// react router dom
import { Link } from "react-router-dom";

// styles
import styles from "./Navbar.module.css";

// icons
import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <Link to="/">
          camera<span>shop</span>
        </Link>
      </div>

      <form className={styles["navbar-search"]}>
        <input type="text" placeholder="Search for product..." />
        <button>
          <HiOutlineSearch />
        </button>
      </form>

      <div className={styles["navbar-cart"]}>
        <HiOutlineShoppingCart />
        {/* <span className={styles["cart-quantity"]}>99</span> */}
      </div>
    </div>
  );
};

export default Navbar;
