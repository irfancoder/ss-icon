import { FunctionComponent, forwardRef } from "react"

interface DormProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Dorm: FunctionComponent<DormProps> = forwardRef<SVGSVGElement, DormProps>(
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
          d="M2 22H22"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7 16.5H10"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 16.5H17"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7 12H10"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 12H17"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7 7.5H10"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 7.5H17"
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

export default Dorm
