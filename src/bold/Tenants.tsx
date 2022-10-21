import { FunctionComponent, forwardRef } from "react"

interface TenantsProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const Tenants: FunctionComponent<TenantsProps> = forwardRef<SVGSVGElement, TenantsProps>(
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
          d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z"
          fill={color}
        ></path>
        <path
          d="M20.79 14.6999C19.67 15.4499 18.1 15.7299 16.65 15.5399C17.03 14.7199 17.23 13.8099 17.24 12.8499C17.24 11.8499 17.02 10.8999 16.6 10.0699C18.08 9.86991 19.65 10.1499 20.78 10.8999C22.36 11.9399 22.36 13.6499 20.79 14.6999Z"
          fill={color}
        ></path>
        <path
          d="M6.43997 7.77C6.50997 7.76 6.57997 7.76 6.64997 7.77C8.19997 7.72 9.42997 6.45 9.42997 4.89C9.42997 3.29 8.13997 2 6.53997 2C4.94997 2 3.65997 3.29 3.65997 4.89C3.65997 6.45 4.88997 7.72 6.43997 7.77Z"
          fill={color}
        ></path>
        <path
          d="M6.55 12.8501C6.55 13.8201 6.76 14.7401 7.14 15.5701C5.73 15.7201 4.26 15.4201 3.18 14.7101C1.6 13.6601 1.6 11.9501 3.18 10.9001C4.25 10.1801 5.76 9.8901 7.18 10.0501C6.77 10.8901 6.55 11.8401 6.55 12.8501Z"
          fill={color}
        ></path>
        <path
          d="M12.12 15.87C12.04 15.86 11.95 15.86 11.86 15.87C10.02 15.81 8.54999 14.3 8.54999 12.44C8.55999 10.54 10.09 9 12 9C13.9 9 15.44 10.54 15.44 12.44C15.43 14.3 13.97 15.81 12.12 15.87Z"
          fill={color}
        ></path>
        <path
          d="M8.86999 17.9399C7.35999 18.9499 7.35999 20.6099 8.86999 21.6099C10.59 22.7599 13.41 22.7599 15.13 21.6099C16.64 20.5999 16.64 18.9399 15.13 17.9399C13.42 16.7899 10.6 16.7899 8.86999 17.9399Z"
          fill={color}
        ></path>
      </svg>
    )
  },
)

export default Tenants
