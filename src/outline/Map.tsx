import { FunctionComponent, forwardRef } from "react"

interface MapProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Map: FunctionComponent<MapProps> = forwardRef<SVGSVGElement, MapProps>(
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
          d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9.00003C7.96003 22 7.06002 21.91 6.27002 21.73L14 14L20.38 20.38Z"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M6.24002 7.97997C6.92002 5.04997 11.32 5.04997 12 7.97997C12.39 9.69997 11.31 11.16 10.36 12.06C9.67001 12.72 8.58003 12.72 7.88003 12.06C6.93003 11.16 5.84002 9.69997 6.24002 7.97997Z"
          stroke="#000929"
          stroke-width="2"
        ></path>
        <path
          d="M9.0946 8.69995H9.10359"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    )
  },
)

export default Map
