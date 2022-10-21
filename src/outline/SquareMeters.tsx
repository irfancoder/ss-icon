import { FunctionComponent, forwardRef } from "react"

interface SquareMetersProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const SquareMeters: FunctionComponent<SquareMetersProps> = forwardRef<SVGSVGElement, SquareMetersProps>(
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
        <g clip-path="url(#clip0_228_5798)">
          <path
            d="M10.5979 18.6523L4.14766 12.2021C3.41758 11.472 3.41758 10.1278 4.14766 9.39768L10.5979 2.94747C11.328 2.21738 12.6722 2.21738 13.4023 2.94747L19.8525 9.39768C20.5826 10.1278 20.5826 11.472 19.8525 12.2021L13.4023 18.6523C12.6722 19.3824 11.328 19.3824 10.5979 18.6523V18.6523Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2.3999 15.8059L7.63636 21.0424"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.3635 21.0424L21.6 15.8059"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_228_5798">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default SquareMeters
