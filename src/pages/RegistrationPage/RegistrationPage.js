import registrationImg from '../../assets/images/registration-img.png'
// import s from '../../stylesheet/main.scss'
import styles from './RegistrationPage.module.scss'

const RegistrationPage = () => {
    return (
        <>
            <section className={styles.section}>
                <div className='container'>
                    <div className={styles.bigGroupWrapper}>
                        <img src={registrationImg} alt='girl' className={styles.img} />
                        <h2 className={styles.title}>Finance App</h2>
                    </div>
                    <div className={styles.formWrapper}>
                        <div className={styles.form}></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegistrationPage;