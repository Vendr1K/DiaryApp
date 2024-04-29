import { IIconProps } from "./icon.props";

export function Logo({ className, ...props }: IIconProps) {
  return (
    <svg
      className={className ?? ""}
      {...props}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M18.027 8.4975C18.0607 8.35357 18.1225 8.21769 18.2087 8.09764C18.295 7.97759 18.4041 7.87571 18.5297 7.79784C18.6554 7.71997 18.7951 7.66763 18.941 7.6438C19.0869 7.61998 19.2361 7.62514 19.38 7.659C20.462 7.91534 21.4517 8.46697 22.2388 9.25246C23.0258 10.038 23.5795 11.0265 23.838 12.108C23.907 12.3984 23.8578 12.7043 23.7013 12.9585C23.5448 13.2127 23.2937 13.3942 23.0032 13.4632C22.7128 13.5323 22.4069 13.4831 22.1527 13.3266C21.8986 13.17 21.717 12.9189 21.648 12.6285C21.4861 11.9532 21.1403 11.3359 20.6488 10.8453C20.1574 10.3546 19.5396 10.0098 18.864 9.849C18.5739 9.78055 18.3228 9.59979 18.1659 9.3464C18.009 9.09301 17.959 8.7877 18.027 8.4975Z"
        fill="#1E2022"
      />
      <path
        d="M7.5 13.5C7.5 10.7152 8.60625 8.04451 10.5754 6.07538C12.5445 4.10625 15.2152 3 18 3C20.7848 3 23.4555 4.10625 25.4246 6.07538C27.3938 8.04451 28.5 10.7152 28.5 13.5C28.5 16.5375 27.495 19.854 25.725 22.434C24.162 24.714 21.9105 26.5305 19.125 26.922V27.375C19.125 27.996 19.629 28.5 20.25 28.5H25.125C25.5682 28.5 26.0071 28.5873 26.4166 28.7569C26.826 28.9265 27.1981 29.1751 27.5115 29.4885C27.8249 29.8019 28.0735 30.174 28.2431 30.5834C28.4127 30.9929 28.5 31.4318 28.5 31.875V33.375C28.5 33.6734 28.3815 33.9595 28.1705 34.1705C27.9595 34.3815 27.6734 34.5 27.375 34.5C27.0766 34.5 26.7905 34.3815 26.5795 34.1705C26.3685 33.9595 26.25 33.6734 26.25 33.375V31.875C26.25 31.5766 26.1315 31.2905 25.9205 31.0795C25.7095 30.8685 25.4234 30.75 25.125 30.75H20.25C19.3549 30.75 18.4965 30.3944 17.8635 29.7615C17.2306 29.1285 16.875 28.2701 16.875 27.375V26.922C14.0895 26.5305 11.838 24.7125 10.275 22.434C8.505 19.854 7.5 16.5375 7.5 13.5ZM18 5.25C15.812 5.25 13.7135 6.11919 12.1664 7.66637C10.6192 9.21354 9.75 11.312 9.75 13.5C9.75 16.0875 10.62 18.96 12.129 21.1605C13.641 23.3625 15.6795 24.75 18 24.75C20.3205 24.75 22.359 23.3625 23.871 21.1605C25.38 18.9585 26.25 16.0875 26.25 13.5C26.25 11.312 25.3808 9.21354 23.8336 7.66637C22.2865 6.11919 20.188 5.25 18 5.25Z"
        fill="#1E2022"
      />
    </svg>
  );
}
