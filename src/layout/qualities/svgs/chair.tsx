export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity=".6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.542 21.502a1 1 0 1 0 1.932.517l1.598-5.964a1 1 0 1 0-1.932-.518l-1.598 5.964Zm10.908-.031a1 1 0 0 1-1.932.518l-1.303-4.863a1 1 0 1 1 1.932-.518l1.303 4.863Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.36 1a2 2 0 0 0-1.972 2.329l1.542 9.253a.5.5 0 0 0 .494.418h9.152a.5.5 0 0 0 .494-.418l1.542-9.253A2 2 0 0 0 16.639 1H7.361ZM5.5 14a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 0-3h-13Z"
        fill="#fff"
      />
    </svg>
  )
}
