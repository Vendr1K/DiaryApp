import { IIconProps } from "./icon.props";

export function Calendar({ className, ...props }: IIconProps) {
  return (
    <svg
      className={className ?? ""}
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M17.75 3C18.612 3 19.4386 3.34241 20.0481 3.9519C20.6576 4.5614 21 5.38805 21 6.25V17.75C21 18.612 20.6576 19.4386 20.0481 20.0481C19.4386 20.6576 18.612 21 17.75 21H6.25C5.38805 21 4.5614 20.6576 3.9519 20.0481C3.34241 19.4386 3 18.612 3 17.75V6.25C3 5.38805 3.34241 4.5614 3.9519 3.9519C4.5614 3.34241 5.38805 3 6.25 3H17.75ZM19.5 8.5H4.5V17.75C4.5 18.716 5.284 19.5 6.25 19.5H17.75C18.2141 19.5 18.6592 19.3156 18.9874 18.9874C19.3156 18.6592 19.5 18.2141 19.5 17.75V8.5ZM7.75 14.5C8.08152 14.5 8.39946 14.6317 8.63388 14.8661C8.8683 15.1005 9 15.4185 9 15.75C9 16.0815 8.8683 16.3995 8.63388 16.6339C8.39946 16.8683 8.08152 17 7.75 17C7.41848 17 7.10054 16.8683 6.86612 16.6339C6.6317 16.3995 6.5 16.0815 6.5 15.75C6.5 15.4185 6.6317 15.1005 6.86612 14.8661C7.10054 14.6317 7.41848 14.5 7.75 14.5ZM12 14.5C12.3315 14.5 12.6495 14.6317 12.8839 14.8661C13.1183 15.1005 13.25 15.4185 13.25 15.75C13.25 16.0815 13.1183 16.3995 12.8839 16.6339C12.6495 16.8683 12.3315 17 12 17C11.6685 17 11.3505 16.8683 11.1161 16.6339C10.8817 16.3995 10.75 16.0815 10.75 15.75C10.75 15.4185 10.8817 15.1005 11.1161 14.8661C11.3505 14.6317 11.6685 14.5 12 14.5ZM7.75 10.5C8.08152 10.5 8.39946 10.6317 8.63388 10.8661C8.8683 11.1005 9 11.4185 9 11.75C9 12.0815 8.8683 12.3995 8.63388 12.6339C8.39946 12.8683 8.08152 13 7.75 13C7.41848 13 7.10054 12.8683 6.86612 12.6339C6.6317 12.3995 6.5 12.0815 6.5 11.75C6.5 11.4185 6.6317 11.1005 6.86612 10.8661C7.10054 10.6317 7.41848 10.5 7.75 10.5ZM12 10.5C12.3315 10.5 12.6495 10.6317 12.8839 10.8661C13.1183 11.1005 13.25 11.4185 13.25 11.75C13.25 12.0815 13.1183 12.3995 12.8839 12.6339C12.6495 12.8683 12.3315 13 12 13C11.6685 13 11.3505 12.8683 11.1161 12.6339C10.8817 12.3995 10.75 12.0815 10.75 11.75C10.75 11.4185 10.8817 11.1005 11.1161 10.8661C11.3505 10.6317 11.6685 10.5 12 10.5ZM16.25 10.5C16.5815 10.5 16.8995 10.6317 17.1339 10.8661C17.3683 11.1005 17.5 11.4185 17.5 11.75C17.5 12.0815 17.3683 12.3995 17.1339 12.6339C16.8995 12.8683 16.5815 13 16.25 13C15.9185 13 15.6005 12.8683 15.3661 12.6339C15.1317 12.3995 15 12.0815 15 11.75C15 11.4185 15.1317 11.1005 15.3661 10.8661C15.6005 10.6317 15.9185 10.5 16.25 10.5ZM17.75 4.5H6.25C5.78587 4.5 5.34075 4.68437 5.01256 5.01256C4.68437 5.34075 4.5 5.78587 4.5 6.25V7H19.5V6.25C19.5 5.78587 19.3156 5.34075 18.9874 5.01256C18.6592 4.68437 18.2141 4.5 17.75 4.5Z"
        fill="#9FA0A1"
      />
    </svg>
  );
}
