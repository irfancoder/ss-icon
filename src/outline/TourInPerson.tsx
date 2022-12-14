import { FunctionComponent, forwardRef } from "react"

interface TourInPersonProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const TourInPerson: FunctionComponent<TourInPersonProps> = forwardRef<SVGSVGElement, TourInPersonProps>(
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
        <g clipPath="url(#clip0_165_2520)">
          <path
            d="M4.22222 12H2L12 2L22 12H19.7778"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4.22235 12V19.7778C4.22235 20.3671 4.45648 20.9324 4.87322 21.3491C5.28997 21.7659 5.8552 22 6.44457 22H17.5557C18.1451 22 18.7103 21.7659 19.127 21.3491C19.5438 20.9324 19.7779 20.3671 19.7779 19.7778V12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_165_2520">
            <rect width="24" height="24" fill={color}></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default TourInPerson
