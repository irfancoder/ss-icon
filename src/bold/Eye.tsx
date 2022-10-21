import { FunctionComponent, forwardRef } from "react"

interface EyeProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Eye: FunctionComponent<EyeProps> = forwardRef<SVGSVGElement, EyeProps>(
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
          d="M21.25 9.14993C18.94 5.51993 15.56 3.42993 12 3.42993C10.22 3.42993 8.49 3.94993 6.91 4.91993C5.33 5.89993 3.91 7.32993 2.75 9.14993C1.75 10.7199 1.75 13.2699 2.75 14.8399C5.06 18.4799 8.44 20.5599 12 20.5599C13.78 20.5599 15.51 20.0399 17.09 19.0699C18.67 18.0899 20.09 16.6599 21.25 14.8399C22.25 13.2799 22.25 10.7199 21.25 9.14993ZM12 16.0399C9.76 16.0399 7.96 14.2299 7.96 11.9999C7.96 9.76993 9.76 7.95993 12 7.95993C14.24 7.95993 16.04 9.76993 16.04 11.9999C16.04 14.2299 14.24 16.0399 12 16.0399Z"
          fill={color}
        ></path>
        <path
          d="M12 9.13989C10.43 9.13989 9.15002 10.4199 9.15002 11.9999C9.15002 13.5699 10.43 14.8499 12 14.8499C13.57 14.8499 14.86 13.5699 14.86 11.9999C14.86 10.4299 13.57 9.13989 12 9.13989Z"
          fill={color}
        ></path>
      </svg>
    )
  },
)

export default Eye
