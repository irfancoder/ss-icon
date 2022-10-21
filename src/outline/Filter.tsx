import { FunctionComponent, forwardRef } from "react"

interface FilterProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Filter: FunctionComponent<FilterProps> = forwardRef<SVGSVGElement, FilterProps>(
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
        <g clip-path="url(#clip0_240_4853)">
          <path
            d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path d="M4 6H12" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M16 6H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path d="M4 12H6" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M10 12H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path d="M4 18H15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M19 18H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_240_4853">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default Filter
