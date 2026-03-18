interface ILogoProps {
  size?: number;
}

const Logo = ({ size = 32 }: ILogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 120"
      width={size}
      height={size * 1.2}
    >
      <path
        d="M50 0C22.4 0 0 22.4 0 50c0 36.2 50 70 50 70s50-33.8 50-70C100 22.4 77.6 0 50 0z"
        fill="currentColor"
        className="text-burgundy"
      />
      <line
        x1="50"
        y1="20"
        x2="50"
        y2="68"
        stroke="#f5f0e8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="38"
        y1="20"
        x2="38"
        y2="38"
        stroke="#f5f0e8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line
        x1="62"
        y1="20"
        x2="62"
        y2="38"
        stroke="#f5f0e8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M38 38 Q38 48 50 48"
        fill="none"
        stroke="#f5f0e8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M62 38 Q62 48 50 48"
        fill="none"
        stroke="#f5f0e8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
