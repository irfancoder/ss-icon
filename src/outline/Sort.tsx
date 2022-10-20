import { FunctionComponent, forwardRef } from "react"

interface SortProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Sort: FunctionComponent<SortProps> = forwardRef<SVGSVGElement, SortProps>(
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
        <path d="M3 7H21" stroke="#000929" stroke-width="2" stroke-linecap="round"></path>
        <path d="M6 12H18" stroke="#000929" stroke-width="2" stroke-linecap="round"></path>
        <path d="M10 17H14" stroke="#000929" stroke-width="2" stroke-linecap="round"></path>
      </svg>
    )
  },
)

export default Sort
