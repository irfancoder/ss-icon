import { FunctionComponent, forwardRef } from "react"

interface LogoutProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Logout: FunctionComponent<LogoutProps> = forwardRef<SVGSVGElement, LogoutProps>(
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
          d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M15 12H3.62" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
          d="M5.85 8.65002L2.5 12L5.85 15.35"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    )
  },
)

export default Logout
