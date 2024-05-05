import React, { useState, MouseEvent } from "react";
import { useClickOutside } from "../../../hooks";
import { EIcons, Icon } from "../../Icon/Icon";
import { Button } from "..";

import styles from "./select.module.css";

interface ISelect
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isSelected: string | null;
  setIsSelected: React.Dispatch<React.SetStateAction<string | null>>;
  options: string[];
}

export function Select({
  isSelected,
  setIsSelected,
  options,
  className,
}: ISelect) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => {
    setIsOpen(false);
  });

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleSelected = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    if (event.target.textContent) {
      setIsOpen(false);
      setIsSelected(event.target.textContent);
    }
  };

  const handleClear = () => {
    setIsSelected(null);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.dropdown} ${className}`} ref={ref}>
      <Button className={`${styles.dropdown__btn} ${isOpen ? `${styles.isOpen}`: ''}`} onClick={handleOpen}>
        <div className={styles.active__option}>
          {isSelected ? (
            isSelected
          ) : (
            <Icon name={EIcons.dafault} className={styles.iconDefault} />
          )}
        </div>
        <Icon
          name={EIcons.arrow}
          className={`${styles.iconArrow} ${
            isOpen ? styles.rotateArrow : styles.arrow
          }`}
        />
      </Button>
      {isOpen && (
        <div className={styles.wrapper}>
          <ul className={styles.dropdown__content}>
            {options.map((item) => {
              return (
                <li key={item}>
                  <div
                    className={styles.dropdown__item}
                    onClick={handleSelected}
                  >
                    {item}
                  </div>
                </li>
              );
            })}
          </ul>
          <Button className={styles.clearButton} onClick={handleClear}>
            <Icon name={EIcons.clear} />
            Убрать эмоцию
          </Button>
        </div>
      )}
    </div>
  );
}
