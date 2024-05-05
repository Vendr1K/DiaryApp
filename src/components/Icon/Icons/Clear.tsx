import { IIconProps } from "./icon.props";

export function Clear({ className, ...props }: IIconProps) {
  return (
    <svg
      className={className ?? ""}
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M9.99996 1.66663C14.6025 1.66663 18.3333 5.39746 18.3333 9.99996C18.3333 14.6025 14.6025 18.3333 9.99996 18.3333C5.39746 18.3333 1.66663 14.6025 1.66663 9.99996C1.66663 5.39746 5.39746 1.66663 9.99996 1.66663ZM15.4308 5.45246L5.45246 15.4308C6.8099 16.5675 8.54381 17.1546 10.3126 17.0764C12.0814 16.9983 13.7568 16.2606 15.0087 15.0087C16.2606 13.7568 16.9983 12.0814 17.0764 10.3126C17.1546 8.54381 16.5675 6.8099 15.4308 5.45246ZM9.99996 2.91663C8.65223 2.91662 7.33247 3.30111 6.19562 4.02496C5.05877 4.7488 4.15201 5.78195 3.58181 7.00311C3.01161 8.22428 2.80162 9.58277 2.97651 10.9191C3.15139 12.2554 3.70388 13.5141 4.56913 14.5475L14.5475 4.56913C13.2738 3.49947 11.6632 2.9142 9.99996 2.91663Z"
        fill="#9FA0A1"
      />
    </svg>
  );
}