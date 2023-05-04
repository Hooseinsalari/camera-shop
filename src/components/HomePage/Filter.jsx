// styles
import styles from "./Filter.module.css";

// react router dom
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className={styles["header-filter"]}>
      <h4>browse categories</h4>

      <div className={styles["cate-fields"]}>
        <ul className={styles["cate-list"]}>
          <li>
            <Link to="/store?filter=dslr" className={styles["cate-link"]}>dslr</Link>
          </li>
          <li>
            <Link to="/store?filter=compact" className={styles["cate-link"]}>compact</Link>
          </li>
          <li>
            <Link to="/store?filter=film" className={styles["cate-link"]}>film camera</Link>
          </li>
          <li>
            <Link to="/store?filter=professional" className={styles["cate-link"]}>PROFESSIONAL</Link>
          </li>
          <li>
            <Link to="/store?filter=mirrorless" className={styles["cate-link"]}>MIRRORLESS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
