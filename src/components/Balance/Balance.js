import styles from '../Balance/Balance.module.scss';

export const Balance = () => {
  return (
    <div className={styles.balance}>
      <p className={styles.title}>Your balance</p>
      <p className={styles.sum}>
        <span>&#8372;</span> 24 000.00
      </p>
    </div>
  );
};
