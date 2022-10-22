import { FunctionComponent, forwardRef } from "react"

interface WifiProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Wifi: FunctionComponent<WifiProps> = forwardRef<SVGSVGElement, WifiProps>(
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
          d="M4.90997 11.8406C9.20997 8.52059 14.8 8.52059 19.1 11.8406"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M2.00006 8.36058C8.06006 3.68059 15.9401 3.68059 22.0001 8.36058"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6.79004 15.4903C9.94004 13.0503 14.05 13.0503 17.2 15.4903"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.40021 19.151C10.9802 17.931 13.0302 17.931 14.6102 19.151"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  },
)

export default Wifi
