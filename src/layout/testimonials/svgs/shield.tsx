export default function Svg({ ...props }) {
  return (
    <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity=".4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m4.667 4.667 8.965-1.681a2 2 0 0 1 .737 0l8.965 1.68v10.237a11 11 0 0 1-5.17 9.328l-3.634 2.271a1 1 0 0 1-1.06 0l-3.633-2.27a11 11 0 0 1-5.17-9.329V4.667Z"
        fill="#E1AB56"
      />
      <path
        opacity=".8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12.833a2.333 2.333 0 1 1 0-4.667 2.333 2.333 0 0 1 0 4.667ZM8.166 19.25C8.418 15.77 10.928 14 13.99 14c3.103 0 5.652 1.672 5.842 5.25.008.142 0 .583-.487.583H8.638c-.163 0-.485-.394-.472-.584Z"
        fill="#E1AB56"
      />
    </svg>
  )
}
