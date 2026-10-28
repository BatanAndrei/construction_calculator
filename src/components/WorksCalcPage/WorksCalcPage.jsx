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

  // ─── Режим сметы ───
  if (result !== null) {
    return (
      <div className={styles.page}>
        <Button variant="back" onClick={() => navigate(backTo)}>
          ← Назад
        </Button>

        <div className={styles.estimate}>
          <h1 className={styles.estimateTitle}>Смета</h1>
          <p className={styles.estimateSubtitle}>{title}</p>

          <table className={styles.estimateTable}>
            <thead>
              <tr>
                <th className={styles.colNum}>№</th>
                <th className={styles.colName}>Наименование</th>
                <th className={styles.colQty}>Кол-во</th>
                <th className={styles.colPrice}>Цена, Br</th>
                <th className={styles.colSum}>Сумма, Br</th>
              </tr>
            </thead>
            <tbody>
              {result.rows.map((row, index) => (
                <tr key={row.id}>
                  <td className={styles.colNum}>{index + 1}</td>
                  <td className={styles.colName}>
                    {row.title}
                    <span className={styles.unit}> / {row.unit}</span>
                  </td>
                  <td className={styles.colQty}>{row.qty}</td>
                  <td className={styles.colPrice}>{formatMoney(row.price)}</td>
                  <td className={styles.colSum}>{formatMoney(row.sum)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className={styles.footLabel}>
                  Итого
                </td>
                <td className={styles.footValue}>
                  {formatMoney(result.worksSum)}
                </td>
              </tr>
              <tr>
                <td colSpan={4} className={styles.footLabel}>
                  в том числе непредвиденные ({EXTRA_PERCENT}%)
                </td>
                <td className={styles.footValue}>
                  {formatMoney(result.extraSum)}
                </td>
              </tr>
              <tr className={styles.footTotal}>
                <td colSpan={4} className={styles.footLabel}>
                  Всего
                </td>
                <td className={styles.footValue}>
                  {formatMoney(result.total)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className={styles.actions}>
          <Button variant="back" onClick={handleEdit}>
            ← Изменить
          </Button>
        </div>
      </div>
    );
  }

  // ─── Режим ввода ───
  return (
    <div className={styles.page}>
      <Button variant="back" onClick={() => navigate(backTo)}>
        ← Назад
      </Button>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>

      <ul className={styles.list}>
        {works.map((work) => (
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
        ))}
      </ul>

      <Button variant="primary" onClick={handleCalculate}>
        Рассчитать
      </Button>
    </div>
  );
};

export default WorksCalcPage;