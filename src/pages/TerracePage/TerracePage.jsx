import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TERRACE_WORKS } from "../../constants/works";
import styles from "./TerracePage.module.css";

const TerracePage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    const chosen = TERRACE_WORKS.filter((w) => selected.includes(w.id));
    navigate("/work/terassa/calc", { state: { works: chosen } });
  };

  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={() => navigate("/")}>
        ← Назад
      </button>

      <h1 className={styles.title}>Терасса</h1>
      <p className={styles.subtitle}>Выберите работы</p>

      <ul className={styles.list}>
        {TERRACE_WORKS.map((work) => (
          <li key={work.id}>
            <label className={styles.row}>
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

      <button
        className={styles.next}
        disabled={selected.length === 0}
        onClick={handleNext}
      >
        Далее
      </button>
    </div>
  );
};

export default TerracePage;
