export default function Svg({ ...props }) {
  return (
    <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity=".4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 25.666c6.444 0 11.667-5.223 11.667-11.666 0-6.444-5.223-11.667-11.666-11.667C7.557 2.333 2.334 7.556 2.334 14c0 6.443 5.223 11.666 11.667 11.666Z"
        fill="#E1AB56"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12.834a2.333 2.333 0 1 1 0-4.667 2.333 2.333 0 0 1 0 4.667ZM8.165 19.25C8.418 15.77 10.928 14 13.99 14c3.103 0 5.652 1.673 5.842 5.25.008.143 0 .584-.487.584H8.638c-.163 0-.485-.395-.472-.584Z"
        fill="#E1AB56"
      />
    </svg>
  )
}
