import React from "react";

// styles
import styles from "./ProductsSlider.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

// import required modules
import { Pagination, Navigation } from "swiper";

// hooks
import useFetch from "../../hooks/useFetch";

// components
import Product from "../shared/Product";

const ProductsSlider = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/products?populate=*"
  );

  // return all products that isNew value is true
  const filteredNewProducts = data?.data.filter((item) =>
    item.attributes.isNew ? item : null
  );

  if (error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Latest Products</h2>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filteredNewProducts?.map((item) => (
            <SwiperSlide key={item.id}>
              <Product item={item.attributes} id={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductsSlider;
