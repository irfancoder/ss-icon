import { FunctionComponent, forwardRef } from "react"

interface DoubleChecksProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const DoubleChecks: FunctionComponent<DoubleChecksProps> = forwardRef<SVGSVGElement, DoubleChecksProps>(
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
        <g clipPath="url(#clip0_165_2409)">
          <path d="M7 12L12 17L22 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path
            d="M12 12L17 7M2 12L7 17L2 12Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_165_2409">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default DoubleChecks
