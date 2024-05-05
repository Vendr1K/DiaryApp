import { HTMLAttributes } from "react";
import styles from "./layout.module.css";

export const Layout = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
