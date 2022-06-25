import styles from './LoadingScreen.module.css';


export const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <span className={styles.loader}></span>
        <div className={styles.loading}>
        <p className={styles.letter}>L</p>
        <p className={styles.letter}>O</p>
        <p className={styles.letter}>A</p>
        <p className={styles.letter}>D</p>
        <p className={styles.letter}>I</p>
        <p className={styles.letter}>N</p>
        <p className={styles.letter}>G</p>
        </div>

      </div>
    </div>
  )
}
