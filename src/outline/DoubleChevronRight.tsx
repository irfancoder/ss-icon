import { FunctionComponent, forwardRef } from "react"

interface DoubleChevronRightProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const DoubleChevronRight: FunctionComponent<DoubleChevronRightProps> = forwardRef<
  SVGSVGElement,
  DoubleChevronRightProps
>(({ className, color = "currentColor", size = 16, ...rest }, ref) => {
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
      <g clipPath="url(#clip0_200_4634)">
        <path
          d="M7.00006 6.99988L12.0001 11.9999L7.00006 16.9999"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13 6.99988L18 11.9999L13 16.9999"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_200_4634">
          <rect width="24" height="24" fill={color}></rect>
        </clipPath>
      </defs>
    </svg>
  )
})

export default DoubleChevronRight
