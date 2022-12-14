import { FunctionComponent, forwardRef } from "react"

interface CondominiumProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Condominium: FunctionComponent<CondominiumProps> = forwardRef<SVGSVGElement, CondominiumProps>(
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
          d="M1 22H23"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.78 22.0101V17.55"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.8 10.89C18.58 10.89 17.6 11.87 17.6 13.09V15.36C17.6 16.58 18.58 17.56 19.8 17.56C21.02 17.56 22 16.58 22 15.36V13.09C22 11.87 21.02 10.89 19.8 10.89Z"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M2.09998 22V6.03003C2.09998 4.02003 3.10003 3.01001 5.09003 3.01001H11.32C13.31 3.01001 14.3 4.02003 14.3 6.03003V22"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.79999 8.25H10.75"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.79999 12H10.75"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.25 22V18.25"
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

export default Condominium
