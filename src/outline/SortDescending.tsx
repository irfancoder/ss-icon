import { FunctionComponent, forwardRef } from "react"

interface SortDescendingProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const SortDescending: FunctionComponent<SortDescendingProps> = forwardRef<SVGSVGElement, SortDescendingProps>(
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
        <g clip-path="url(#clip0_300_6430)">
          <path d="M4 6H13" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M4 12H11" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M4 18H11" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M15 15L18 18L21 15"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path d="M18 6V18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_300_6430">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default SortDescending
