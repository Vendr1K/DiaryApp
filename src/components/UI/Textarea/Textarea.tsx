import styles from "./textarea.module.css";

interface ITextarea
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea = ({ className, ...props }: ITextarea) => {
  return (
    <textarea className={`${styles.area} ${className}`} {...props}></textarea>
  );
};
