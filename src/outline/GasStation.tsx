import { FunctionComponent, forwardRef } from "react"

interface GasStationProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const GasStation: FunctionComponent<GasStationProps> = forwardRef<SVGSVGElement, GasStationProps>(
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
          d="M3.5 22V5C3.5 3 4.84 2 6.5 2H14.5C16.16 2 17.5 3 17.5 5V22H3.5Z"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M2 22H19" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
          d="M8.39 10.0001H12.62C13.66 10.0001 14.51 9.50011 14.51 8.11011V6.88011C14.51 5.49011 13.66 4.99011 12.62 4.99011H8.39C7.35 4.99011 6.5 5.49011 6.5 6.88011V8.11011C6.5 9.50011 7.35 10.0001 8.39 10.0001Z"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M6.5 13H9.5" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
          d="M17.5 16.01L22 16V10L20 9"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    )
  },
)

export default GasStation
