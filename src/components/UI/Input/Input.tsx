import styles from "./input.module.css";

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = ({ type, className, ...props }: IInput) => {
  return (
    <input
      type={type ?? "text"}
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
};
