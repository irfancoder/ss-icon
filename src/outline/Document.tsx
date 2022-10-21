import { FunctionComponent, forwardRef } from "react"

interface DocumentProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Document: FunctionComponent<DocumentProps> = forwardRef<SVGSVGElement, DocumentProps>(
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
          d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8 13H12"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8 17H16"
          stroke={color}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    )
  },
)

export default Document
