import { FunctionComponent, forwardRef } from "react"

interface RecentActivityProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const RecentActivity: FunctionComponent<RecentActivityProps> = forwardRef<SVGSVGElement, RecentActivityProps>(
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
        <g clipPath="url(#clip0_374_18815)">
          <path d="M12 8V12L14 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path
            d="M3.04999 10.9999C3.27408 8.8 4.30025 6.75956 5.93272 5.26791C7.56519 3.77627 9.68968 2.93783 11.9009 2.91257C14.112 2.88732 16.2551 3.67701 17.9213 5.13098C19.5874 6.58495 20.6599 8.60142 20.9342 10.7957C21.2084 12.9899 20.6653 15.2084 19.4083 17.0277C18.1514 18.8471 16.2686 20.14 14.1193 20.6598C11.9699 21.1796 9.7044 20.8899 7.75498 19.846C5.80557 18.8021 4.30871 17.077 3.54999 14.9999M3.04999 19.9999V14.9999H8.04999"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_374_18815">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default RecentActivity
