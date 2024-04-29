import { EIcons, Icon } from "../Icon/Icon";
import { Button } from "../UI";
import noData from "/noData.png";
import styles from "./content.module.css";

export const Content = () => {
  return (
    <div className={styles.wrapper}>
      <img src={noData} alt="Нет заметок" />
      <Button className={styles.button}>
        <Icon name={EIcons.pen} />
        Создать первую запись
      </Button>
    </div>
  );
};
