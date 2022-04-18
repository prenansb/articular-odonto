export default function Svg({ ...props }) {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 3C9.927 3 8.672 4.216 8 5c-.672-.784-1.927-2-3-2-1.9 0-3 1.481-3 3.367C2 9.5 8 13 8 13s6-3.5 6-6.5C14 4.615 12.9 3 11 3Z"
        fill="#E1AB56"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5c-.672-.784-1.927-2-3-2-1.9 0-3 1.481-3 3.367C2 9.5 8 13 8 13V5Z"
        fill="#E1AB56"
      />
    </svg>
  )
}
