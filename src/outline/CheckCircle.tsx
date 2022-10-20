import { FunctionComponent, forwardRef } from "react"

interface CheckCircleProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const CheckCircle: FunctionComponent<CheckCircleProps> = forwardRef<SVGSVGElement, CheckCircleProps>(
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
          d="M12.0001 21.9999C17.5001 21.9999 22.0001 17.4999 22.0001 11.9999C22.0001 6.49988 17.5001 1.99988 12.0001 1.99988C6.50012 1.99988 2.00012 6.49988 2.00012 11.9999C2.00012 17.4999 6.50012 21.9999 12.0001 21.9999Z"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M7.74988 12L10.5799 14.83L16.2499 9.17004"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    )
  },
)

export default CheckCircle
