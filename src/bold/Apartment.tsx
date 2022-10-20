import { FunctionComponent, forwardRef } from "react"

interface ApartmentProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Apartment: FunctionComponent<ApartmentProps> = forwardRef<SVGSVGElement, ApartmentProps>(
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
          d="M5 8C3.34 8 2 9.34 2 11V19C2 20.66 3.34 22 5 22H6.5C7.6 22 8.5 21.1 8.5 20V10C8.5 8.9 7.6 8 6.5 8H5ZM6 17C6 17.41 5.66 17.75 5.25 17.75C4.84 17.75 4.5 17.41 4.5 17V13C4.5 12.59 4.84 12.25 5.25 12.25C5.66 12.25 6 12.59 6 13V17Z"
          fill="#000929"
        ></path>
        <path
          d="M19 2H13C11.34 2 10 3.34 10 5V19C10 20.66 11.34 22 13 22H13.5C13.78 22 14 21.78 14 21.5V18C14 17.45 14.45 17 15 17H17C17.55 17 18 17.45 18 18V21.5C18 21.78 18.22 22 18.5 22H19C20.66 22 22 20.66 22 19V5C22 3.34 20.66 2 19 2ZM14.75 13C14.75 13.41 14.41 13.75 14 13.75C13.59 13.75 13.25 13.41 13.25 13V8C13.25 7.59 13.59 7.25 14 7.25C14.41 7.25 14.75 7.59 14.75 8V13ZM18.75 13C18.75 13.41 18.41 13.75 18 13.75C17.59 13.75 17.25 13.41 17.25 13V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V13Z"
          fill="#000929"
        ></path>
      </svg>
    )
  },
)

export default Apartment
