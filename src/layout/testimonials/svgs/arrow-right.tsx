export default function Svg({ ...props }) {
  return (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="40" height="40" rx="20" fill="#54B6AE" />
      <path
        d="m20.947 20-4.72 4.72a1.334 1.334 0 1 0 1.893 1.88l5.654-5.653a1.335 1.335 0 0 0 0-1.893l-5.654-5.72a1.332 1.332 0 0 0-.946-.387 1.333 1.333 0 0 0-.947.387 1.333 1.333 0 0 0 0 1.88L20.947 20Z"
        fill="#F6F6F8"
      />
    </svg>
  )
}
