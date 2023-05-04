import React from "react";

// react router dom
import { Link } from "react-router-dom";

// style
import styles from "./Product.module.css";

// helper
import { truncate } from "../../helper/functions";

const Product = ({ item, id }) => {
  return (
    <Link className={styles.container} to={`product/${id}`}>
      <div className={styles["pro-img"]}>
        <img
          src={`http://localhost:1337${item.image.data[0].attributes.formats.thumbnail.url}`}
          alt={item.title}
        />
      </div>

      <h4 className={styles["pro-category"]}>
        {item.categories.data[0].attributes.title}
      </h4>

      <h3 className={styles["pro-title"]}>{truncate(item.title)}</h3>

      <h4 className={styles["pro-price"]}>${item.price}</h4>

      <span className={styles["pro-new"]}>new</span>
    </Link>
  );
};

export default Product;
