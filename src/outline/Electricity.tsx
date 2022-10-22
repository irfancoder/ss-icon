import { FunctionComponent, forwardRef } from "react"

interface ElectricityProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Electricity: FunctionComponent<ElectricityProps> = forwardRef<SVGSVGElement, ElectricityProps>(
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
          d="M6.08983 13.2794H9.17983V20.4794C9.17983 22.1594 10.0898 22.4994 11.1998 21.2394L18.7698 12.6394C19.6998 11.5894 19.3098 10.7194 17.8998 10.7194H14.8098V3.51941C14.8098 1.83941 13.8998 1.49941 12.7898 2.75941L5.21983 11.3594C4.29983 12.4194 4.68983 13.2794 6.08983 13.2794Z"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  },
)

export default Electricity
