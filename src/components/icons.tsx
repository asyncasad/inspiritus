type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  icon: (props: IconProps) => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_908_42)">
        <path
          d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_908_42">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  minus_icon: (props: IconProps) => (
    <svg
      width="18"
      height="7"
      viewBox="0 0 18 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 6.14V0.5H17.76V6.14H0Z" fill="black" />
    </svg>
  ),
  plus_icon: (props: IconProps) => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z"
        fill="#191A23"
      />
    </svg>
  ),
};
