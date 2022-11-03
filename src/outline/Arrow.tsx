import { FunctionComponent, forwardRef } from "react"

interface ArrowProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Arrow: FunctionComponent<ArrowProps> = forwardRef<SVGSVGElement, ArrowProps>(
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
        <g clipPath="url(#clip0_207_6124)">
          <path
            d="M4.16663 10H15.8333"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4.16663 10L9.16663 15"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4.16663 10L9.16663 5"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_207_6124">
            <rect width="20" height="20" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default Arrow
