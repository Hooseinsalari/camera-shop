// styles
import styles from "./CenterSlider.module.css";

const CenterSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>Special Offer</h3>
        <h2>save 20%<br />On your<br />First order</h2>
        <button>shop now</button>
      </div>
    </div>
  );
};

export default CenterSlider;
