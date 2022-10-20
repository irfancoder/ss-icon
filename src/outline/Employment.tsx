import { FunctionComponent, forwardRef } from "react"

interface EmploymentProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Employment: FunctionComponent<EmploymentProps> = forwardRef<SVGSVGElement, EmploymentProps>(
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
          d="M8.00001 22H16C20.02 22 20.74 20.39 20.95 18.43L21.7 10.43C21.97 7.99 21.27 6 17 6H7.00001C2.73001 6 2.03001 7.99 2.30001 10.43L3.05001 18.43C3.26001 20.39 3.98001 22 8.00001 22Z"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M2.62 11.27C4.87 12.81 7.41 13.74 10 14.03"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    )
  },
)

export default Employment
