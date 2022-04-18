export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity=".6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 8h-1.826a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1H8.87a1 1 0 0 1-1-1v-2a2 2 0 0 0-2-2H4V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2ZM17.832 21.03a1 1 0 0 1-1.732 1l-2-3.464a1 1 0 0 1 1.732-1l2 3.464Zm-11.671.03a1 1 0 0 0 1.732 1l2-3.464a1 1 0 0 0-1.732-1l-2 3.465Z"
        fill="#E1AB56"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5h1.87v2a3 3 0 0 0 3 3h6.304a3 3 0 0 0 3-3v-2H20Z"
        fill="#E1AB56"
      />
    </svg>
  )
}
