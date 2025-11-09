export function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={(size / 48) * 36}
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M4 28.5L12 9L18.5 18.5L24 6L29.5 18.5L36 9L44 28.5"
        stroke="#C7A253"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 30C12 33.5 36 33.5 42 30"
        stroke="#C7A253"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8" r="2" fill="#C7A253" />
      <circle cx="36" cy="8" r="2" fill="#C7A253" />
      <circle cx="24" cy="4" r="2.2" fill="#C7A253" />
      <circle cx="6" cy="28" r="1.7" fill="#C7A253" />
      <circle cx="42" cy="28" r="1.7" fill="#C7A253" />
    </svg>
  );
}
