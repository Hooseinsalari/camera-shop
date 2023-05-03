// components
import Header from "../components/HomePage/Header";

// styles
import styles from "./HomePage.module.css"


const HomePage = () => {
    return (
        <div className={styles["home"]}>
            <Header />
        </div>
    );
};

export default HomePage;