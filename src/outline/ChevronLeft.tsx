import { FunctionComponent, forwardRef } from "react"

interface ChevronLeftProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const ChevronLeft: FunctionComponent<ChevronLeftProps> = forwardRef<SVGSVGElement, ChevronLeftProps>(
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
        <g clipPath="url(#clip0_141_2704)">
          <path d="M15 6L9 12L15 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_141_2704">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default ChevronLeft
