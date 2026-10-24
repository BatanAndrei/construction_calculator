import { useNavigate } from 'react-router-dom';
import styles from './StubPage.module.css';

const StubPage = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={() => navigate('/')}>
        ← Назад
      </button>

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>Страница в разработке</p>
    </div>
  );
};

export default StubPage;