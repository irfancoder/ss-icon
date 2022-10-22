import { FunctionComponent, forwardRef } from "react"

interface OnTimeProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const OnTime: FunctionComponent<OnTimeProps> = forwardRef<SVGSVGElement, OnTimeProps>(
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
          d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path d="M12 8V13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path
          d="M9 2H15"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  },
)

export default OnTime
