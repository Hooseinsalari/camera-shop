import React, { useContext, useState } from "react";

// styles
import styles from "./Cart.module.css";

// icons
import { AiOutlineClose } from "react-icons/ai";

// context
import { cartContext } from "../../context/CartContextProvider";

// functions
import { truncate } from "../../helper/functions";

const Cart = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useContext(cartContext);
//   const [selectValue, setSelectValue] = useState(1)

  const productCountHandler = (e, item) => {
    // setSelectValue(e.target.value)
    dispatch({ type: "PRODUCT_COUNT", payload: item, count: e.target.value });
  };

  return (
    <>
      {isOpen ? (
        <div className={styles.cart}>
          <div
            className={styles["cart-close"]}
            onClick={() => setIsOpen(false)}
          >
            <AiOutlineClose />
          </div>

          <div className={styles["cart-list"]}>
            {state.selectedItems.map((item) => (
              <div key={item.id} className={styles["cart-product"]}>
                <div className={styles["pro-image"]}>
                  <img
                    src={`http://localhost:1337${item.attributes.image.data[0].attributes.formats.thumbnail.url}`}
                    alt=""
                  />
                </div>

                <div className={styles["pro-details"]}>
                  <h6 className={styles["pro-title"]}>
                    {truncate(item.attributes.title)}
                  </h6>

                  <div className={styles["pro-counter"]}>
                    <select
                      onChange={(e) => productCountHandler(e, item)}
                      value={item.quantity}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>

                    <h6 className={styles["pro-price"]}>
                      ${item.attributes.price}
                    </h6>
                  </div>
                </div>

                <div className={styles["pro-remove"]}>
                  <button>
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles["cart-check"]}>
            <h4 className={styles["total-price"]}>
              Total price: $<span>{state.totalPrice}</span>
            </h4>
            <div className={styles["cart-btns"]}>
              <button className={styles["clear-btn"]}>Clear</button>
              <button className={styles["checkout-btn"]}>Checkout</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
