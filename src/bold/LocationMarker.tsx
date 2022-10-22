import { FunctionComponent, forwardRef } from "react"

interface LocationMarkerProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const LocationMarker: FunctionComponent<LocationMarkerProps> = forwardRef<SVGSVGElement, LocationMarkerProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.05997 4.86009C7.63536 3.2847 9.77204 2.39966 12 2.39966C14.2279 2.39966 16.3646 3.2847 17.94 4.86009C19.5154 6.43547 20.4004 8.57216 20.4004 10.8001C20.4004 13.028 19.5154 15.1647 17.94 16.7401L12 22.6801L6.05997 16.7401C5.27987 15.9601 4.66105 15.034 4.23886 14.0148C3.81667 12.9956 3.59937 11.9033 3.59937 10.8001C3.59937 9.69691 3.81667 8.60454 4.23886 7.58535C4.66105 6.56616 5.27987 5.64011 6.05997 4.86009V4.86009ZM12 13.2001C12.6365 13.2001 13.2469 12.9472 13.697 12.4971C14.1471 12.0471 14.4 11.4366 14.4 10.8001C14.4 10.1636 14.1471 9.55312 13.697 9.10303C13.2469 8.65294 12.6365 8.40009 12 8.40009C11.3635 8.40009 10.753 8.65294 10.3029 9.10303C9.85283 9.55312 9.59997 10.1636 9.59997 10.8001C9.59997 11.4366 9.85283 12.0471 10.3029 12.4971C10.753 12.9472 11.3635 13.2001 12 13.2001Z"
          fill={color}
        ></path>
      </svg>
    )
  },
)

export default LocationMarker
