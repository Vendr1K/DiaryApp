import { EIcons, Icon } from "../Icon/Icon";
import { Button, Logo } from "../UI";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button className={styles.button}>
        <Icon name={EIcons.pen} />
      </Button>
    </header>
  );
};
