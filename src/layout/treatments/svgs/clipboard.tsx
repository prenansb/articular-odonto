export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity=".5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2v.5A1.5 1.5 0 0 1 14.5 5h-5A1.5 1.5 0 0 1 8 3.5V3Z"
        fill="#E1AB56"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H11a1 1 0 1 1 2 0Z"
        fill="#E1AB56"
      />
      <rect opacity=".7" x="7" y="10" width="5" height="2" rx="1" fill="#E1AB56" />
      <rect opacity=".7" x="7" y="14" width="9" height="2" rx="1" fill="#E1AB56" />
    </svg>
  )
}
