import { useNavigate } from "react-router-dom";
import { WORKS } from "../../constants/works";
import Button from "../../components/Button/Button";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Калькулятор работ</h1>
      <p className={styles.subtitle}>Выберите категорию работ</p>

      <ul className={styles.list}>
        {WORKS.map((work) => (
          <li key={work.id}>
            <Button
              variant="menu"
              className={styles.item}
              onClick={() => navigate(`/work/${work.id}`)}
            >
              <span className={styles.itemTitle}>{work.title}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
