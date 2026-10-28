import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { playCoinSound } from "../../utils/coinSound";
import { playPukSound } from "../../utils/pukSound";
import { EXTRA_PERCENT } from "../../constants/works";
import { formatMoney } from "../../helpers/helpers";
import { useReactToPrint } from "react-to-print";
import styles from "./WorksCalcPage.module.css";

const WorksCalcPage = ({ title, subtitle, backTo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const works = location.state?.works || [];

  const [volumes, setVolumes] = useState({});
  const [result, setResult] = useState(null);

  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
  });

  const handleShare = () => {
    const lines = result.rows.map(
      (row, i) =>
        `${i + 1}. ${row.title} — ${row.qty} ${row.unit} × ${formatMoney(row.price)} Br = ${formatMoney(row.sum)} Br`
    );

    const text = [
      `СМЕТА: ${title}`,
      "────────────────────",
      ...lines,
      "────────────────────",
      `Итого: ${formatMoney(result.worksSum)} Br`,
      `Непредвиденные (${EXTRA_PERCENT}%): ${formatMoney(result.extraSum)} Br`,
      `ВСЕГО: ${formatMoney(result.total)} Br`,
    ].join("\n");

    if (navigator.share) {
      navigator.share({ title: "Смета", text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  const isDesktop = window.innerWidth > 768;

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

          <table className={styles.estimateTable} ref={printRef}>
            <thead>
              <tr>
                <th className={styles.colNum}>№</th>
                <th className={styles.colName}>Работа</th>
                <th className={styles.colQty}>Кол-во</th>
                <th className={styles.colPrice}>Цена</th>
                <th className={styles.colSum}>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {result.rows.map((row, index) => (
                <tr key={row.id}>
                  <td className={styles.colNum}>{index + 1}</td>
                  <td className={styles.colName}>
                    {row.title}
                    <span className={styles.unit}></span>
                  </td>
                  <td className={styles.colQty}>
                    {row.qty} {row.unit}
                  </td>
                  <td className={styles.colPrice}>
                    {formatMoney(row.price)} Br
                  </td>
                  <td className={styles.colSum}>{formatMoney(row.sum)} Br</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className={styles.footLabel}>
                  Итого:
                </td>
                <td className={styles.footValue}>
                  {formatMoney(result.worksSum)} Br
                </td>
              </tr>
              <tr>
                <td colSpan={4} className={styles.footLabel}>
                  в том числе непредвиденные ({EXTRA_PERCENT}%):
                </td>
                <td className={styles.footValue}>
                  {formatMoney(result.extraSum)} Br
                </td>
              </tr>
              <tr className={styles.footTotal}>
                <td colSpan={4} className={styles.footLabel}>
                  Всего:
                </td>
                <td className={styles.footValue}>
                  {formatMoney(result.total)} Br
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className={styles.actions}>
          <Button variant="back" onClick={handleEdit}>
            ← Изменить
          </Button>
          <Button variant="back" onClick={handleShare} title="Отправить">
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22l-4-9-9-4 20-7z" />
            </svg>
          </Button>
          {isDesktop && (
            <Button variant="back" onClick={handlePrint} title="Печать">
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </Button>
          )}
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
