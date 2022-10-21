import { FunctionComponent, forwardRef } from "react"

interface MedalProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Medal: FunctionComponent<MedalProps> = forwardRef<SVGSVGElement, MedalProps>(
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
          d="M10 12.5C13.1066 12.5 15.625 10.0748 15.625 7.08329C15.625 4.09175 13.1066 1.66663 10 1.66663C6.8934 1.66663 4.375 4.09175 4.375 7.08329C4.375 10.0748 6.8934 12.5 10 12.5Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M6.26671 11.2667L6.25839 17.4167C6.25839 18.1667 6.7834 18.5334 7.4334 18.225L9.66672 17.1667C9.85006 17.075 10.1584 17.075 10.3417 17.1667L12.5834 18.225C13.2251 18.525 13.7584 18.1667 13.7584 17.4167V11.1167"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    )
  },
)

export default Medal
