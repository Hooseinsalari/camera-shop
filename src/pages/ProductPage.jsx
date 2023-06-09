import React, { useContext } from "react";

// react router dom
import { useParams } from "react-router-dom";

// hooks
import useFetch from "../hooks/useFetch";

// styles
import styles from "./ProductPage.module.css";

// context
import { cartContext } from "../context/CartContextProvider";

const ProductPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/products/${id}?populate=*`
  );

  // context
  const { state, dispatch } = useContext(cartContext);

  const findProduct = state.selectedItems.find(
    (item) => item.id === data?.data?.id
  );

  // main product data i need
  const product = data?.data?.attributes;

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      {loading && data?.data ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.product}>
          <div className={styles["pro-image"]}>
            <img
              src={`http://localhost:1337${product?.image.data[0].attributes.formats.small.url}`}
              alt={product?.title}
              loading="lazy"
            />
          </div>

          <div className={styles["pro-details"]}>
            <h4 className={styles["pro-category"]}>
              {product?.categories.data[0].attributes.title}
            </h4>
            <h4 className={styles["pro-title"]}>{product?.title}</h4>
            <p className={styles["pro-description"]}>{product?.description}</p>

            <div className={styles["pro-add-to-cart"]}>
              <h4>${product?.price}</h4>
              {!findProduct ? (
                <button
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: data?.data });
                  }}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch({ type: "REMOVE_ITEM", payload: data?.data });
                  }}
                >
                  In Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
