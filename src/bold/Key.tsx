import { FunctionComponent, forwardRef } from "react"

interface KeyProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Key: FunctionComponent<KeyProps> = forwardRef<SVGSVGElement, KeyProps>(
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
          d="M19.79 14.9301C17.73 16.9801 14.78 17.6101 12.19 16.8001L7.48002 21.5001C7.14002 21.8501 6.47002 22.0601 5.99002 21.9901L3.81002 21.6901C3.09002 21.5901 2.42002 20.9101 2.31002 20.1901L2.01002 18.0101C1.94002 17.5301 2.17002 16.8601 2.50002 16.5201L7.20002 11.8201C6.40002 9.22007 7.02002 6.27007 9.08002 4.22007C12.03 1.27007 16.82 1.27007 19.78 4.22007C22.74 7.17007 22.74 11.9801 19.79 14.9301Z"
          fill="#000929"
        ></path>
        <path
          d="M6.89001 17.49L9.19001 19.79"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
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

export default Key
