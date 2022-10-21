import { FunctionComponent, forwardRef } from "react"

interface RepairProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Repair: FunctionComponent<RepairProps> = forwardRef<SVGSVGElement, RepairProps>(
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
          d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M20.17 5.3L19.69 14.01C19.63 14 19.57 14 19.5 14H4.50004C4.43004 14 4.37004 14 4.31004 14.01L3.83004 5.3C3.65004 3.53 5.04004 2 6.81004 2H17.19C18.96 2 20.35 3.53 20.17 5.3Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M7.98999 2V7" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12 2V4" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    )
  },
)

export default Repair
