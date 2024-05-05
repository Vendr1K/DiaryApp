import { EIcons, Icon } from "../Icon/Icon";
import styles from "./imgPicker.module.css";

interface IImgPicker
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const ImgPicker = ({ className, ...props }: IImgPicker) => {
  return (
    <div className={`${styles.wrapper} ${className ?? ""}`} {...props}>
      <Icon name={EIcons.img} />
    </div>
  );
};
