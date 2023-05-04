import styles from "./ButtonFatec.module.css"

function ButtonFatec({ type, label }) {
    return (
        <button className={styles.buttonFatec} type= { type }>
            Fatec { label }
        </button>
    )
};

export default ButtonFatec;