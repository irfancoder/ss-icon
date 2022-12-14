import { FunctionComponent, forwardRef } from "react"

interface CheckProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Check: FunctionComponent<CheckProps> = forwardRef<SVGSVGElement, CheckProps>(
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
        <g clipPath="url(#clip0_119_2471)">
          <path d="M5 12L10 17L20 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_119_2471">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default Check
