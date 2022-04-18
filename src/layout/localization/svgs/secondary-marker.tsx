export default function Svg({ ...props }) {
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="32" height="32" rx="4" fill="#80B4FC" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.533 24.176C12.507 22.378 8 17.988 8 14.5 8 10 11 7 15.5 7s7.5 3.75 7.5 7.5c0 2.927-4.568 7.68-6.574 9.627a1.383 1.383 0 0 1-1.893.049ZM18 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        fill="#fff"
      />
    </svg>
  )
}
