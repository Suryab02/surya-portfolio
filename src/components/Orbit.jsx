import { experience } from "../data/data";

// The orbital mark doubles as a career map: one satellite per role,
// newest closest to the body. Hovering a satellite names it.
// Decorative, but the geometry is real data.
const ORBITS = [
  { cx: 330, cy: 46, r: 11, fill: "var(--accent)" },
  { cx: 392, cy: 150, r: 12, fill: "var(--ochre)" },
  { cx: 48, cy: 243, r: 10, fill: "var(--sage)" },
];

export default function Orbit() {
  return (
    <svg
      className="orbit"
      viewBox="0 0 440 400"
      fill="none"
      role="img"
      aria-label={`Career map: ${experience
        .map((e) => e.company)
        .join(", ")}`}
    >
      <g stroke="var(--line-2)" strokeWidth="1.1">
        <ellipse cx="220" cy="200" rx="208" ry="88" transform="rotate(-18 220 200)" />
        <ellipse cx="220" cy="200" rx="188" ry="128" transform="rotate(14 220 200)" />
        <ellipse cx="220" cy="200" rx="150" ry="150" opacity=".5" />
      </g>

      <circle cx="238" cy="178" r="104" fill="var(--accent)" />
      <circle cx="238" cy="178" r="104" fill="url(#orbit-grain)" opacity=".3" />

      {experience.map((role, i) => {
        const o = ORBITS[i];
        if (!o) return null;
        return (
          <g key={role.company + role.period} className="orbit-sat">
            <title>{`${role.company} — ${role.period}`}</title>
            <circle cx={o.cx} cy={o.cy} r={o.r + 11} fill="transparent" />
            <circle className="orbit-halo" cx={o.cx} cy={o.cy} r={o.r + 7} fill={o.fill} />
            <circle cx={o.cx} cy={o.cy} r={o.r} fill={o.fill} />
          </g>
        );
      })}

      <circle cx="120" cy="92" r="5" fill="var(--ochre)" opacity=".7" />

      <defs>
        <pattern id="orbit-grain" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="transparent" />
          <circle cx="1" cy="1" r=".55" fill="#000" opacity=".16" />
        </pattern>
      </defs>
    </svg>
  );
}
