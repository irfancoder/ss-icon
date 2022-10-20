import { FunctionComponent, forwardRef } from "react"

interface TownhouseProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Townhouse: FunctionComponent<TownhouseProps> = forwardRef<SVGSVGElement, TownhouseProps>(
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
          d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M17.37 8.41998V19.58C17.37 21.19 16.57 22 14.96 22H9.12C7.51 22 6.70001 21.19 6.70001 19.58V8.41998C6.70001 6.80998 7.51 6 9.12 6H14.96C16.57 6 17.37 6.80998 17.37 8.41998Z"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M13.4 6V4.15002C13.4 2.72002 14.12 2 15.55 2H19.85C21.28 2 22 2.72002 22 4.15002V15.85C22 17.28 21.28 18 19.85 18H17.37"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M10 11H14"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M10 14H14"
          stroke="#000929"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 22V19"
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

export default Townhouse
