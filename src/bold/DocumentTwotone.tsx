import { FunctionComponent, forwardRef } from "react"

interface DocumentTwotoneProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const DocumentTwotone: FunctionComponent<DocumentTwotoneProps> = forwardRef<SVGSVGElement, DocumentTwotoneProps>(
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
          d="M21 6.99976V16.9998C21 19.9998 19.5 21.9998 16 21.9998H8C4.5 21.9998 3 19.9998 3 16.9998V6.99976C3 3.99976 4.5 1.99976 8 1.99976H16C19.5 1.99976 21 3.99976 21 6.99976Z"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.4"
          d="M14.5001 4.5V6.5C14.5001 7.6 15.4001 8.5 16.5001 8.5H18.5001"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.4"
          d="M7.99994 13.0002H11.9999"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity="0.4"
          d="M7.99994 16.9998H15.9999"
          stroke={color}
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  },
)

export default DocumentTwotone
