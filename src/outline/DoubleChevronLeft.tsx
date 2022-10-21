import { FunctionComponent, forwardRef } from "react"

interface DoubleChevronLeftProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const DoubleChevronLeft: FunctionComponent<DoubleChevronLeftProps> = forwardRef<SVGSVGElement, DoubleChevronLeftProps>(
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
        <g clip-path="url(#clip0_200_4646)">
          <path
            d="M11 7L6 12L11 17"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17 7L12 12L17 17"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_200_4646">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default DoubleChevronLeft
