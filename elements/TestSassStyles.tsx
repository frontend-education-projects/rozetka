import styles from './TestSassStyles.module.sass'

export const TestSassStyles = () => {
    return (
        <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>Rozetka</div>
        </div>
        </header>
    )
}
