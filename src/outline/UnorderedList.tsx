import { FunctionComponent, forwardRef } from "react"

interface UnorderedListProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const UnorderedList: FunctionComponent<UnorderedListProps> = forwardRef<SVGSVGElement, UnorderedListProps>(
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
        <g clipPath="url(#clip0_184_2648)">
          <path d="M9 6H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M9 12H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M9 18H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M5 6V6.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M5 12V12.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M5 18V18.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_184_2648">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default UnorderedList
