import { FunctionComponent, forwardRef } from "react"

interface ChevronDownProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const ChevronDown: FunctionComponent<ChevronDownProps> = forwardRef<SVGSVGElement, ChevronDownProps>(
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
        <g clipPath="url(#clip0_86_1267)">
          <path
            d="M5 8.5L12 15.5L19 8.5"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_86_1267">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default ChevronDown
