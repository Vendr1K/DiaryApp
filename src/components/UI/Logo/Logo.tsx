import React from "react";
import { Button } from "..";
import { EIcons, Icon } from "../../";

import styles from "./logo.module.css";
import { Epages } from "../../../constatns/constatns";

interface ILogo
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  setPage: (prop: Epages) => void;
}

export function Logo({ className, setPage }: ILogo) {
  return (
    <Button
      className={`${styles.logo} ${className}`}
      onClick={() => setPage(Epages.main)}
    >
      <div className={styles.logo__background}>
        <Icon name={EIcons.logo} />
      </div>
      <h1 className={styles.title}>DreamTime</h1>
    </Button>
  );
}
