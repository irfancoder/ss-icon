import { FunctionComponent, forwardRef } from "react"

interface PropertyInsuranceProps {
  className?: string
  size?: number
  color?: string
  [rest: string]: any
}

const PropertyInsurance: FunctionComponent<PropertyInsuranceProps> = forwardRef<SVGSVGElement, PropertyInsuranceProps>(
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
        <g clip-path="url(#clip0_221_5950)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 12H4.22217V19.7778C4.22217 20.3671 4.45629 20.9324 4.87304 21.3491C5.28979 21.7659 5.85502 22 6.44439 22H17.5555C18.1449 22 18.7101 21.7659 19.1268 21.3491C19.5436 20.9324 19.7777 20.3671 19.7777 19.7778V12H19.7778H22L12 2L2 12Z"
            fill="#000929"
          ></path>
          <path
            d="M4.22217 12H5.22217C5.22217 11.4477 4.77445 11 4.22217 11V12ZM2 12L1.29289 11.2929C1.0069 11.5789 0.92134 12.009 1.07612 12.3827C1.2309 12.7564 1.59554 13 2 13V12ZM4.87304 21.3491L4.16593 22.0562L4.16594 22.0562L4.87304 21.3491ZM19.1268 21.3491L19.834 22.0562H19.834L19.1268 21.3491ZM19.7777 12V11C19.2254 11 18.7777 11.4477 18.7777 12H19.7777ZM22 12V13C22.4045 13 22.7691 12.7564 22.9239 12.3827C23.0787 12.009 22.9931 11.5789 22.7071 11.2929L22 12ZM12 2L12.7071 1.29289C12.3166 0.902369 11.6834 0.902369 11.2929 1.29289L12 2ZM4.22217 11H2V13H4.22217V11ZM3.22217 12V19.7778H5.22217V12H3.22217ZM3.22217 19.7778C3.22217 20.6324 3.56165 21.4519 4.16593 22.0562L5.58015 20.642C5.35094 20.4128 5.22217 20.1019 5.22217 19.7778H3.22217ZM4.16594 22.0562C4.77022 22.6605 5.5898 23 6.44439 23V21C6.12024 21 5.80936 20.8712 5.58015 20.642L4.16594 22.0562ZM6.44439 23H17.5555V21H6.44439V23ZM17.5555 23C18.4101 23 19.2297 22.6605 19.834 22.0562L18.4197 20.642C18.1905 20.8712 17.8797 21 17.5555 21V23ZM19.834 22.0562C20.4382 21.452 20.7777 20.6324 20.7777 19.7778H18.7777C18.7777 20.1019 18.649 20.4128 18.4197 20.642L19.834 22.0562ZM20.7777 19.7778V12H18.7777V19.7778H20.7777ZM19.7778 11H19.7777V13H19.7778V11ZM22 11H19.7778V13H22V11ZM11.2929 2.70711L21.2929 12.7071L22.7071 11.2929L12.7071 1.29289L11.2929 2.70711ZM2.70711 12.7071L12.7071 2.70711L11.2929 1.29289L1.29289 11.2929L2.70711 12.7071Z"
            fill="#000929"
          ></path>
          <path
            d="M9 13.5L11 15.5L15 11.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_221_5950">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
)

export default PropertyInsurance
