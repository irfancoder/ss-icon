import { FunctionComponent, forwardRef } from "react"

interface PropertyInsuranceProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const PropertyInsurance: FunctionComponent<PropertyInsuranceProps> = forwardRef<SVGSVGElement, PropertyInsuranceProps>(
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
        <g clip-path="url(#clip0_86_2064)">
          <path
            d="M4.22222 12H2L12 2L22 12H19.7778"
            stroke="#000929"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4.22223 12V19.7778C4.22223 20.3671 4.45636 20.9324 4.8731 21.3491C5.28985 21.7659 5.85508 22 6.44445 22H17.5556C18.1449 22 18.7102 21.7659 19.1269 21.3491C19.5437 20.9324 19.7778 20.3671 19.7778 19.7778V12"
            stroke="#000929"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 13.5L11 15.5L15 11.5"
            stroke="#000929"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_86_2064">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default PropertyInsurance
