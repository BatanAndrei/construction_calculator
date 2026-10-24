import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './FencesCalcPage.module.css';

const FencesCalcPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const works = location.state?.works || [];

  const [volumes, setVolumes] = useState({});
  const [total, setTotal] = useState(null);

  const handleChange = (id, value) => {
    setVolumes((prev) => ({ ...prev, [id]: value }));
    setTotal(null);
  };

  const handleCalculate = () => {
    const sum = works.reduce((acc, work) => {
      const qty = Number(volumes[work.id]) || 0;
      return acc + qty * work.price;
    }, 0);
    setTotal(sum);
  };

  if (works.length === 0) {
    return (
      <div className={styles.page}>
        <button className={styles.back} onClick={() => navigate('/work/zabory')}>
          ← Назад
        </button>
        <p className={styles.empty}>Работы не выбраны</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={() => navigate('/work/zabory')}>
        ← Назад
      </button>

      <h1 className={styles.title}>Заборы — объёмы</h1>
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
              value={volumes[work.id] || ''}
              onChange={(e) => handleChange(work.id, e.target.value)}
            />
          </li>
        ))}
      </ul>

      <button className={styles.calculate} onClick={handleCalculate}>
        Рассчитать
      </button>

      {total !== null && (
        <div className={styles.total}>
          <span>Итого:</span>
          <span className={styles.totalValue}>
            {total.toLocaleString('ru-RU')} Br
          </span>
        </div>
      )}
    </div>
  );
};

export default FencesCalcPage;