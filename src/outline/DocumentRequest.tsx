import { FunctionComponent, forwardRef } from "react"

interface DocumentRequestProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const DocumentRequest: FunctionComponent<DocumentRequestProps> = forwardRef<SVGSVGElement, DocumentRequestProps>(
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
          d="M9 11V17L11 15"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path d="M9 17L7 15" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
          d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
          stroke="#000929"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    )
  },
)

export default DocumentRequest
