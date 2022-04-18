export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        opacity=".6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm10 4a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
        fill="#E1AB56"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.983 13C4.262 13 .388 15.427.001 20.2c-.021.26.476.8.727.8h16.519c.75 0 .763-.605.75-.8-.292-4.907-4.226-7.2-9.014-7.2Zm14.473 8H19.6c0-2.25-.744-4.328-1.999-6 3.407.038 6.188 1.76 6.398 5.4.008.147 0 .6-.543.6Z"
        fill="#E1AB56"
      />
    </svg>
  )
}
