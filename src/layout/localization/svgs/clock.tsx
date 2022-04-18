export default function Svg({ ...props }) {
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="32" height="32" rx="4" fill="#FFCF99" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 26a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.465 11.962a.5.5 0 0 1 .498-.462h.085a.5.5 0 0 1 .497.45L17 16.5l3.248 1.856a.5.5 0 0 1 .252.434v.055a.5.5 0 0 1-.631.483l-4.47-1.22a.5.5 0 0 1-.367-.52l.433-5.626Z"
        fill="#F5D6A3"
      />
    </svg>
  )
}
