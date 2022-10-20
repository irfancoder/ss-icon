import { FunctionComponent, forwardRef } from "react"

interface SendProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Send: FunctionComponent<SendProps> = forwardRef<SVGSVGElement, SendProps>(
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
          d="M18.07 8.50989L9.51002 4.22989C3.76002 1.34989 1.40002 3.70989 4.28002 9.45989L5.15002 11.1999C5.40002 11.7099 5.40002 12.2999 5.15002 12.8099L4.28002 14.5399C1.40002 20.2899 3.75002 22.6499 9.51002 19.7699L18.07 15.4899C21.91 13.5699 21.91 10.4299 18.07 8.50989ZM14.84 12.7499H9.44002C9.03002 12.7499 8.69002 12.4099 8.69002 11.9999C8.69002 11.5899 9.03002 11.2499 9.44002 11.2499H14.84C15.25 11.2499 15.59 11.5899 15.59 11.9999C15.59 12.4099 15.25 12.7499 14.84 12.7499Z"
          fill="#000929"
        ></path>
      </svg>
    )
  },
)

export default Send
