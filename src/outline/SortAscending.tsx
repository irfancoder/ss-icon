import { FunctionComponent, forwardRef } from "react"

interface SortAscendingProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const SortAscending: FunctionComponent<SortAscendingProps> = forwardRef<SVGSVGElement, SortAscendingProps>(
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
        <g clip-path="url(#clip0_300_6429)">
          <path d="M4 6H11" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M4 12H11" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M4 18H13" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M15 9L18 6L21 9"
            stroke="#000929"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path d="M18 6V18" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_300_6429">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default SortAscending
