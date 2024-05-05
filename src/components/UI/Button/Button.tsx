import React from "react";
import styles from "./button.module.css";
import { EIcons, Icon } from "../../Icon/Icon";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  primary?: boolean;
  text?: string;
  background?: string;
  icon?: string;
}

export const Button = ({
  children,
  className,
  primary,
  disabled,
  background,
  text,
  icon,
  onClick,
  ...props
}: IButton) => {
  return (
    <button
      className={`
      ${styles.button} 
      ${primary ? styles.primary : ""} 
      ${className}`}
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor: `${background}` }}
      {...props}
    >
      {children}
      {icon && <Icon name={icon as EIcons} />}
      {text}
    </button>
  );
};
