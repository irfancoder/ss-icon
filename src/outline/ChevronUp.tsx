import { FunctionComponent, forwardRef } from "react"

interface ChevronUpProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const ChevronUp: FunctionComponent<ChevronUpProps> = forwardRef<SVGSVGElement, ChevronUpProps>(
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
        <g clip-path="url(#clip0_141_2706)">
          <path
            d="M6 15L12 9L18 15"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_141_2706">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default ChevronUp
