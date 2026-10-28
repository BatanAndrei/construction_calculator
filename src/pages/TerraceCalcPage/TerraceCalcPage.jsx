import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { playCoinSound } from "../../utils/coinSound";
import { playPukSound } from "../../utils/pukSound";
import { EXTRA_PERCENT } from "../../constants/works";
import { formatMoney } from "../../helpers/helpers";
import styles from "./TerraceCalcPage.module.css";

const TerraceCalcPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const works = location.state?.works || [];

  const [volumes, setVolumes] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (id, value) => {
    setVolumes((prev) => ({ ...prev, [id]: value }));
    setTotal(null);
  };

  const handleCalculate = () => {
    const worksSum = works.reduce((acc, work) => {
      const qty = Number(volumes[work.id]) || 0;
      return acc + qty * work.price;
    }, 0);
    const extraSum = (worksSum * EXTRA_PERCENT) / 100;
    const total = worksSum + extraSum;

    if (total === 0) {
      playPukSound();
    } else {
      playCoinSound();
    }

    setResult({ worksSum, extraSum, total });
  };

  if (works.length === 0) {
    return (
      <div className={styles.page}>
        <Button variant="back" onClick={() => navigate("/work/terassa")}>
          ← Назад
        </Button>
        <p className={styles.empty}>Работы не выбраны</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Button variant="back" onClick={() => navigate("/work/terassa")}>
        ← Назад
      </Button>

      <h1 className={styles.title}>Терасса — объёмы</h1>
      <p className={styles.subtitle}>Укажите объём по каждой работе</p>

      <ul className={styles.list}>
        {works.map((work) => (
          <li key={work.id} className={styles.row}>
            <div className={styles.rowInfo}>
              <span className={styles.rowTitle}>{work.title}</span>
              <span className={styles.rowPrice}>
                {work.price} Br / {work.unit}
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
        ))}
      </ul>

      <Button variant="primary" onClick={handleCalculate}>
        Рассчитать
      </Button>

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

export default TerraceCalcPage;
