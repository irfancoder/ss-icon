import { FunctionComponent, forwardRef } from "react"

interface ArchiveProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Archive: FunctionComponent<ArchiveProps> = forwardRef<SVGSVGElement, ArchiveProps>(
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
          d="M19.5 10.22V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V10.22"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M10.18 14H13.82" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    )
  },
)

export default Archive
