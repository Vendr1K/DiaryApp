import { Link } from "../UI";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>
        Проект выполнен в рамках стажировки
        <Link className={styles.link} href="https://preax.ru/" target="_blank">
          Preax
        </Link>
      </span>
    </footer>
  );
};
