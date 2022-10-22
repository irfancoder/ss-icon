import { FunctionComponent, forwardRef } from "react"

interface AddProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Add: FunctionComponent<AddProps> = forwardRef<SVGSVGElement, AddProps>(
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
        <g clipPath="url(#clip0_90_1713)">
          <path d="M12 4V20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M4 12H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_90_1713">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default Add
