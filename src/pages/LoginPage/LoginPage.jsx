import styles from '../LoginPage/LoginPage.module.scss';
import loginImg from '../../assets/images/login-img.png';

export const LoginPage = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.commonWrapper}>
            <div className={styles.bigGroupWrapper}>
              <div className={styles.wrapper}>
                <img src={loginImg} alt="boy" className={styles.img} />
                <h2 className={styles.title}>Finance App</h2>
              </div>
            </div>
            <div className={styles.formWrapper}>
              <div className={styles.form}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
