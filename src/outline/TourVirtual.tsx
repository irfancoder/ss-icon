import { FunctionComponent, forwardRef } from "react"

interface TourVirtualProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const TourVirtual: FunctionComponent<TourVirtualProps> = forwardRef<SVGSVGElement, TourVirtualProps>(
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
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.09998 11.9999V10.5199C9.09998 8.60987 10.45 7.83987 12.1 8.78987L13.38 9.52987L14.66 10.2699C16.31 11.2199 16.31 12.7799 14.66 13.7299L13.38 14.4699L12.1 15.2099C10.45 16.1599 9.09998 15.3799 9.09998 13.4799V11.9999Z"
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

export default TourVirtual
