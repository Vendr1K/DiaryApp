import noData from "/noData.png";
import { EIcons } from "../../components";
import { Button } from "../../components/UI";

import styles from "./content.module.css";

interface IContent
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  changePage: () => void;
}

export const Content = ({ changePage }: IContent) => {
  return (
    <div className={styles.wrapper}>
      <img src={noData} alt="Нет заметок" />
      <Button
        className={styles.button}
        onClick={changePage}
        icon={EIcons.pen}
        text={"Создать первую запись"}
      />
    </div>
  );
};
