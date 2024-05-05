import { useState } from "react";
import { ImgPicker } from "../../components/ImgPicker/ImgPicker";
import { Input, Textarea, Calendar, Select, Button } from "../../components/UI";
import styles from "./addNote.module.css";
import { emotion } from "../../constatns/constatns";
import { EIcons } from "../../components";

export const AddNote = () => {
  const [isSelected, setIsSelected] = useState<string | null>(null);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input placeholder={"Заголовок"} />
        <div className={styles.rtBlock}>
          <Calendar />
          <Select
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            options={emotion}
          />
        </div>
        <Textarea className={styles.area} placeholder="Описание" />
        <div className={styles.rbBlock}>
          <ImgPicker />
          <Input placeholder="#теги" />
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <Button
          className={styles.button}
          text="Создать запись"
          icon={EIcons.pen}
        />
        <Button
          className={styles.button}
          text="Отменить"
          background="#e9eaea"
        />
      </div>
    </div>
  );
};
