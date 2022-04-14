export default function Svg({ ...props }) {
  return (
    <svg width="26" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 1h24M1 9h24M1 17h24"
        stroke="#F6F6F8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
