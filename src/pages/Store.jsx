import React, { useEffect, useState } from "react";

// react router dom
import { useSearchParams } from "react-router-dom";

// styles
import styles from "./Store.module.css";

// hooks
import useFetch from "../hooks/useFetch";
import Product from "../components/shared/Product";
import Filter from "../components/HomePage/Filter";

const Store = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = searchParams.get("filter");
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/products?populate=*"
  );
  const [filteredProducts, setFilteredProducts] = useState(data?.data);

  useEffect(() => {
    const filterProducts = data?.data.filter(
      (item) =>
        item.attributes.categories.data[0].attributes.title === filterParams
    );

    setFilteredProducts(filterProducts);
  }, [data?.data, filterParams]);

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      {loading && !data ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles["store"]}>
          <div className={styles["filter-sidebar"]}>
            <Filter />
          </div>
          <div className={styles.products}>
            {filteredProducts?.map((item) => (
              <Product item={item.attributes} id={item.id} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
