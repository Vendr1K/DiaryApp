import { Epages } from "../../constatns/constatns";
import { EIcons, Icon } from "../Icon/Icon";
import { Button, Logo } from "../UI";
import styles from "./header.module.css";

interface IContent
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  setPage: (prop: Epages) => void;
  page: Epages;
}

export const Header = ({ page, setPage }: IContent) => {
  return (
    <header className={styles.header}>
      <Logo setPage={setPage} />
      {page === Epages.main && (
        <Button
          className={styles.button}
          onClick={() => setPage(Epages.addNote)}
          icon={EIcons.pen}
        />
      )}
    </header>
  );
};
