import { FunctionComponent, forwardRef } from "react"

interface InfoProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Info: FunctionComponent<InfoProps> = forwardRef<SVGSVGElement, InfoProps>(
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
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path d="M12 8V13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path
          d="M11.9945 16H12.0035"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  },
)

export default Info
