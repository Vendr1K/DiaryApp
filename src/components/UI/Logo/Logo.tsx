import React from "react";
import { Link } from "..";
import { EIcons, Icon } from "../../";

import styles from "./logo.module.css";

interface ILogo
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Logo({ className }: ILogo) {
  return (
    <Link href="./" className={`${styles.logo} ${className}`}>
      <div className={styles.logo__background}>
        <Icon name={EIcons.logo} />
      </div>
      <h1 className={styles.title}>DreamTime</h1>
    </Link>
  );
}
