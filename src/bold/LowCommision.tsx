import { FunctionComponent, forwardRef } from "react"

interface LowCommisionProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const LowCommision: FunctionComponent<LowCommisionProps> = forwardRef<SVGSVGElement, LowCommisionProps>(
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
          d="M12 21L22 14H18.01L18 3H6V14H2L12 21Z"
          fill="#000929"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M9 14L15 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
          d="M9.5 9C9.77614 9 10 8.77614 10 8.5C10 8.22386 9.77614 8 9.5 8C9.22386 8 9 8.22386 9 8.5C9 8.77614 9.22386 9 9.5 9Z"
          fill="white"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M14.5 14C14.7761 14 15 13.7761 15 13.5C15 13.2239 14.7761 13 14.5 13C14.2239 13 14 13.2239 14 13.5C14 13.7761 14.2239 14 14.5 14Z"
          fill="white"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    )
  },
)

export default LowCommision
