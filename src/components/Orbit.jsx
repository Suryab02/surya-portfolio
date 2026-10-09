// Orbital mark echoing the share-card artwork: a terracotta body with
// thin rings and sage / ochre satellites. Decorative only.
export default function Orbit() {
  return (
    <svg
      className="orbit"
      viewBox="0 0 440 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="var(--line-2)" strokeWidth="1.1">
        <ellipse cx="220" cy="200" rx="208" ry="88" transform="rotate(-18 220 200)" />
        <ellipse cx="220" cy="200" rx="188" ry="128" transform="rotate(14 220 200)" />
        <ellipse cx="220" cy="200" rx="150" ry="150" opacity=".5" />
      </g>

      <circle cx="238" cy="178" r="104" fill="var(--accent)" />
      <circle cx="238" cy="178" r="104" fill="url(#grain)" opacity=".35" />

      <circle cx="48" cy="243" r="9" fill="var(--accent)" />
      <circle cx="392" cy="150" r="11" fill="var(--ochre)" />
      <circle cx="330" cy="46" r="10" fill="var(--sage)" />
      <circle cx="120" cy="92" r="6" fill="var(--ochre)" opacity=".8" />

      <defs>
        <pattern id="grain" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="transparent" />
          <circle cx="1" cy="1" r=".55" fill="#000" opacity=".16" />
        </pattern>
      </defs>
    </svg>
  );
}
