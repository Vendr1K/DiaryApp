import { EIcons, Icon } from "../../Icon/Icon";
import { Input } from "../Input/Input";
import styles from "./calendar.module.css";

interface ICalendar
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export const Calendar = ({}: ICalendar) => {
  return (
    <label className={styles.label}>
      <Icon name={EIcons.calendar} className={styles.icon}/>
      <Input type="date"  className={styles.input}/>
    </label>
  );
};
