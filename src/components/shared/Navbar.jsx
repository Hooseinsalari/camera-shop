import { useContext, useState } from "react";

// react router dom
import { Link } from "react-router-dom";

// styles
import styles from "./Navbar.module.css";

// icons
import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";

// components
import Cart from "../Cart/Cart";

// context
import { cartContext } from "../../context/CartContextProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(cartContext);

  const cartHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

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

      <div className={styles["navbar-cart"]} onClick={cartHandler}>
        <HiOutlineShoppingCart />
        {state.itemCounter ? (
          <span className={styles["cart-quantity"]}>{state.itemCounter}</span>
        ) : null}
      </div>

      <div
        className={
          isOpen
            ? [styles["cart"], styles["cart-active"]].join(" ")
            : styles["cart"]
        }
      >
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;
