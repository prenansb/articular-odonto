export default function Svg({ ...props }) {
  return (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="40" height="40" rx="20" fill="#54B6AE" />
      <path
        d="m19.053 20 4.72-4.72a1.334 1.334 0 1 0-1.893-1.88l-5.654 5.653a1.335 1.335 0 0 0 0 1.893l5.654 5.72a1.33 1.33 0 0 0 .946.387 1.333 1.333 0 0 0 .947-.387 1.333 1.333 0 0 0 0-1.88L19.053 20Z"
        fill="#F6F6F8"
      />
    </svg>
  )
}
