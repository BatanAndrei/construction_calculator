import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { playCoinSound } from "../../utils/coinSound";
import { playPukSound } from "../../utils/pukSound";
import { EXTRA_PERCENT } from "../../constants/works";
import { formatMoney } from "../../helpers/helpers";
import styles from "./WorksCalcPage.module.css";

const WorksCalcPage = ({ title, subtitle, backTo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const works = location.state?.works || [];

  const [volumes, setVolumes] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (id, value) => {
    setVolumes((prev) => ({ ...prev, [id]: value }));
  };

  const handleCalculate = () => {
    const rows = works.map((work) => {
      const qty = Number(volumes[work.id]) || 0;
      return { ...work, qty, sum: qty * work.price };
    });
    const worksSum = rows.reduce((acc, row) => acc + row.sum, 0);
    const extraSum = (worksSum * EXTRA_PERCENT) / 100;
    const total = worksSum + extraSum;

    if (total === 0) {
      playPukSound();
    } else {
      playCoinSound();
    }

    setResult({ rows, worksSum, extraSum, total });
  };

  const handleEdit = () => {
    setResult(null);
  };

  if (works.length === 0) {
    return (
      <div className={styles.page}>
        <Button variant="back" onClick={() => navigate(backTo)}>
          ← Назад
        </Button>
        <p className={styles.empty}>Работы не выбраны</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Button variant="back" onClick={() => navigate(backTo)}>
        ← Назад
      </Button>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>
        {result === null ? subtitle : "Смета"}
      </p>

      <ul className={styles.list}>
        {result === null
          ? works.map((work) => (
              <li key={work.id} className={styles.row}>
                <div className={styles.rowInfo}>
                  <span className={styles.rowTitle}>{work.title}</span>
                  <span className={styles.rowPrice}>
                    {formatMoney(work.price)} Br / {work.unit}
                  </span>
                </div>
                <input
                  className={styles.input}
                  type="number"
                  min="0"
                  placeholder="0"
                  value={volumes[work.id] || ""}
                  onChange={(e) => handleChange(work.id, e.target.value)}
                />
              </li>
            ))
          : result.rows.map((row) => (
              <li key={row.id} className={styles.row}>
                <div className={styles.rowInfo}>
                  <span className={styles.rowTitle}>{row.title}</span>
                  <span className={styles.rowPrice}>
                    {row.qty} {row.unit} × {formatMoney(row.price)} Br
                  </span>
                </div>
                <span className={styles.rowSum}>
                  {formatMoney(row.sum)} Br
                </span>
              </li>
            ))}
      </ul>

      {result === null ? (
        <Button variant="primary" onClick={handleCalculate}>
          Рассчитать
        </Button>
      ) : (
        <Button variant="back" onClick={handleEdit}>
          ← Изменить
        </Button>
      )}

      {result !== null && (
        <div className={styles.total}>
          <div className={styles.totalRow}>
            <span>Итого:</span>
            <span className={styles.totalValue}>
              {formatMoney(result.total)} Br
            </span>
          </div>
          <div className={styles.totalRow}>
            <span className={styles.extraLabel}>
              в том числе непредвиденные ({EXTRA_PERCENT}%):
            </span>
            <span className={styles.extraValue}>
              {formatMoney(result.extraSum)} Br
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorksCalcPage;