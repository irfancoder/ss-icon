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
        <g clip-path="url(#clip0_207_5014)">
          <path
            d="M20.7014 16.4943C20.145 15.5366 19.4817 13.7192 19.4817 10.5V9.83469C19.4817 5.68296 16.1511 2.28058 12.0571 2.25019C12.038 2.25009 12.019 2.25 11.9999 2.25C10.0133 2.25258 8.10913 3.0442 6.70622 4.45072C5.30331 5.85723 4.51658 7.76344 4.5191 9.75V10.5C4.5191 13.719 3.85543 15.5363 3.29879 16.494C3.16583 16.7217 3.09528 16.9805 3.09425 17.2443C3.09322 17.508 3.16175 17.7673 3.29293 17.9961C3.4241 18.2249 3.61329 18.4151 3.84141 18.5475C4.06953 18.6798 4.32851 18.7497 4.59225 18.75H8.25005C8.25005 19.7446 8.64514 20.6984 9.3484 21.4017C10.0517 22.1049 11.0055 22.5 12.0001 22.5C12.9946 22.5 13.9484 22.1049 14.6517 21.4017C15.355 20.6984 15.7501 19.7446 15.7501 18.75H19.4079C19.6716 18.7497 19.9305 18.6798 20.1586 18.5475C20.3867 18.4152 20.5759 18.2251 20.707 17.9963C20.8382 17.7675 20.9068 17.5083 20.9058 17.2446C20.9048 16.9809 20.8343 16.7221 20.7014 16.4943V16.4943ZM12.0001 21C11.4035 20.9993 10.8316 20.762 10.4098 20.3402C9.98801 19.9184 9.75074 19.3465 9.75005 18.75H14.2501C14.2494 19.3465 14.0121 19.9184 13.5903 20.3402C13.1685 20.762 12.5966 20.9993 12.0001 21Z"
            fill="#000929"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_207_5014">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default Notification
