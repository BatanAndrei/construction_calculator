import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./WorksSelectPage.module.css";

const WorksSelectPage = ({ title, subtitle, works, backTo, nextTo }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    const chosen = works.filter((w) => selected.includes(w.id));
    navigate(nextTo, { state: { works: chosen } });
  };

  return (
    <div className={styles.page}>
      <Button variant="back" onClick={() => navigate(backTo)}>
        ← Назад
      </Button>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>

      <ul className={styles.list}>
        {works.map((work) => (
          <li key={work.id}>
            <label
              className={`${styles.row} ${
                selected.includes(work.id) ? styles.rowActive : ""
              }`}
            >
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selected.includes(work.id)}
                onChange={() => toggle(work.id)}
              />
              <span className={styles.rowTitle}>{work.title}</span>
            </label>
          </li>
        ))}
      </ul>

      <Button
        variant="primary"
        disabled={selected.length === 0}
        onClick={handleNext}
      >
        Далее
      </Button>
    </div>
  );
};

export default WorksSelectPage;
