import { FunctionComponent, forwardRef } from "react"

interface TenantApplicationProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const TenantApplication: FunctionComponent<TenantApplicationProps> = forwardRef<SVGSVGElement, TenantApplicationProps>(
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
          strokeWidth="2"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 14.4998C12.9205 14.4998 13.6667 13.7536 13.6667 12.8332C13.6667 11.9127 12.9205 11.1665 12 11.1665C11.0796 11.1665 10.3334 11.9127 10.3334 12.8332C10.3334 13.7536 11.0796 14.4998 12 14.4998Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.8633 18.8333C14.8633 17.5433 13.58 16.5 12 16.5C10.42 16.5 9.13666 17.5433 9.13666 18.8333"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
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

export default TenantApplication
