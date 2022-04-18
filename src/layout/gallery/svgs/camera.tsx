export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5Zm3 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
        fill="#E1AB56"
      />
      <rect opacity=".6" x="9" y="4" width="6" height="2" rx="1" fill="#E1AB56" />
      <path
        opacity=".6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="#E1AB56"
      />
    </svg>
  )
}
