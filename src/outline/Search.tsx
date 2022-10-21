import { FunctionComponent, forwardRef } from "react"

interface SearchProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Search: FunctionComponent<SearchProps> = forwardRef<SVGSVGElement, SearchProps>(
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
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M22 22L20 20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    )
  },
)

export default Search
