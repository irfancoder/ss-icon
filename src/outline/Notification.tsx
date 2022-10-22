import { FunctionComponent, forwardRef } from "react"

interface NotificationProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Notification: FunctionComponent<NotificationProps> = forwardRef<SVGSVGElement, NotificationProps>(
  ({ className, color = "currentColor", size = 16, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        className={className}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <g clipPath="url(#clip0_206_5013)">
          <path
            d="M5.26898 9.74994C5.26774 8.86045 5.44256 7.97951 5.78337 7.1579C6.12418 6.33628 6.62424 5.59025 7.25471 4.9628C7.88519 4.33535 8.63362 3.83889 9.45687 3.50204C10.2801 3.16519 11.1619 2.99461 12.0514 3.00013C15.7629 3.02772 18.7317 6.11275 18.7317 9.83468V10.4999C18.7317 13.8577 19.4341 15.8061 20.0529 16.871C20.1195 16.9848 20.155 17.1142 20.1557 17.246C20.1564 17.3779 20.1223 17.5076 20.0569 17.6221C19.9915 17.7366 19.897 17.8318 19.783 17.8982C19.669 17.9645 19.5396 17.9996 19.4077 17.9999H4.59216C4.46027 17.9996 4.33081 17.9645 4.21683 17.8981C4.10284 17.8318 4.00838 17.7366 3.94295 17.622C3.87753 17.5075 3.84346 17.3778 3.84419 17.2459C3.84492 17.114 3.88041 16.9846 3.9471 16.8709C4.56616 15.8059 5.26898 13.8575 5.26898 10.4999L5.26898 9.74994Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_206_5013">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default Notification
