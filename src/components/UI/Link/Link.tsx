import styles from "./link.module.css";

interface ILink
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const Link = ({ href, className, children, ...props }: ILink) => {
  return (
    <a href={href ?? "/"} className={`${styles.link} ${className}`} {...props}>
      {children}
    </a>
  );
};
