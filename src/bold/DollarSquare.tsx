import { FunctionComponent, forwardRef } from "react"

interface DollarSquareProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const DollarSquare: FunctionComponent<DollarSquareProps> = forwardRef<SVGSVGElement, DollarSquareProps>(
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
        <path
          d="M11.25 8.08008V10.9401L10.24 10.5901C9.72998 10.4101 9.41998 10.2401 9.41998 9.37008C9.41998 8.66008 9.94998 8.08008 10.6 8.08008H11.25V8.08008Z"
          fill="#000929"
        ></path>
        <path
          d="M14.58 14.6301C14.58 15.3401 14.05 15.9201 13.4 15.9201H12.75V13.0601L13.76 13.4101C14.27 13.5901 14.58 13.7601 14.58 14.6301Z"
          fill="#000929"
        ></path>
        <path
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.26 12C15.04 12.27 16.08 12.84 16.08 14.63C16.08 16.17 14.88 17.42 13.4 17.42H12.75V18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V17.42H10.89C9.25 17.42 7.92 16.03 7.92 14.33C7.92 13.92 8.25 13.58 8.67 13.58C9.08 13.58 9.42 13.92 9.42 14.33C9.42 15.21 10.08 15.92 10.89 15.92H11.25V12.53L9.74 12C8.96 11.73 7.92 11.16 7.92 9.37C7.92 7.83 9.12 6.58 10.6 6.58H11.25V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V6.58H13.11C14.75 6.58 16.08 7.97 16.08 9.67C16.08 10.08 15.75 10.42 15.33 10.42C14.92 10.42 14.58 10.08 14.58 9.67C14.58 8.79 13.92 8.08 13.11 8.08H12.75V11.47L14.26 12Z"
          fill="#000929"
        ></path>
      </svg>
    )
  },
)

export default DollarSquare
