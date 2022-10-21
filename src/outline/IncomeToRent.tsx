import { FunctionComponent, forwardRef } from "react"

interface IncomeToRentProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const IncomeToRent: FunctionComponent<IncomeToRentProps> = forwardRef<SVGSVGElement, IncomeToRentProps>(
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
        <g clip-path="url(#clip0_142_2850)">
          <path
            d="M20.7125 7.88203L14.0463 2.70181C13.4612 2.24711 12.7412 2.00024 12 2.00024C11.2588 2.00024 10.5388 2.24711 9.95375 2.70181L3.28625 7.88203C2.88555 8.19334 2.56137 8.59203 2.33844 9.04764C2.11552 9.50324 1.99976 10.0037 2 10.5108V19.5025C2 20.165 2.26339 20.8003 2.73223 21.2687C3.20107 21.7371 3.83696 22.0002 4.5 22.0002H19.5C20.163 22.0002 20.7989 21.7371 21.2678 21.2687C21.7366 20.8003 22 20.165 22 19.5025V10.5108C22 9.48305 21.525 8.51269 20.7125 7.88203Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.5 14.75C9.5 15.72 10.25 16.5 11.17 16.5H13.05C13.85 16.5 14.5 15.82 14.5 14.97C14.5 14.06 14.1 13.73 13.51 13.52L10.5 12.47C9.91 12.26 9.51001 11.94 9.51001 11.02C9.51001 10.18 10.16 9.48999 10.96 9.48999H12.84C13.76 9.48999 14.51 10.27 14.51 11.24"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path d="M12 8.5V17.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_142_2850">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default IncomeToRent
