import { FunctionComponent, forwardRef } from "react"

interface ItalicProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Italic: FunctionComponent<ItalicProps> = forwardRef<SVGSVGElement, ItalicProps>(
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
        <g clip-path="url(#clip0_184_2650)">
          <path d="M11 5H17" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M7 19H13" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M14 5L10 19" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
        <defs>
          <clipPath id="clip0_184_2650">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default Italic
