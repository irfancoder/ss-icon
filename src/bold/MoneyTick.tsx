import { FunctionComponent, forwardRef } from "react"

interface MoneyTickProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const MoneyTick: FunctionComponent<MoneyTickProps> = forwardRef<SVGSVGElement, MoneyTickProps>(
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
          d="M17 4H7C4 4 2 5.5 2 9V12.56C2 12.93 2.38 13.16 2.71 13.01C3.69 12.56 4.82 12.39 6.01 12.6C8.64 13.07 10.57 15.51 10.5 18.18C10.49 18.6 10.43 19.01 10.32 19.41C10.24 19.72 10.49 20.01 10.81 20.01H17C20 20.01 22 18.51 22 15.01V9C22 5.5 20 4 17 4ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5ZM19.25 14C19.25 14.41 18.91 14.75 18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14Z"
          fill={color}
        ></path>
        <path
          d="M5 14C2.79 14 1 15.79 1 18C1 18.75 1.21 19.46 1.58 20.06C2.27 21.22 3.54 22 5 22C6.46 22 7.73 21.22 8.42 20.06C8.79 19.46 9 18.75 9 18C9 15.79 7.21 14 5 14ZM6.97 17.67L4.84 19.64C4.7 19.77 4.51 19.84 4.33 19.84C4.14 19.84 3.95 19.77 3.8 19.62L2.81 18.63C2.52 18.34 2.52 17.86 2.81 17.57C3.1 17.28 3.58 17.28 3.87 17.57L4.35 18.05L5.95 16.57C6.25 16.29 6.73 16.31 7.01 16.61C7.29 16.91 7.27 17.39 6.97 17.67Z"
          fill={color}
        ></path>
      </svg>
    )
  },
)

export default MoneyTick
