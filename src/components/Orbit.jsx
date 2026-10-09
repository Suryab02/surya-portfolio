import { experience } from "../data/data";

// Orbital mark doubling as a career map: one satellite per role, newest on
// the innermost path. Inner orbits run faster, the way real ones do, so the
// current job leads. Paths are shared between the visible rings and the
// satellites' offset-path, so a dot can never drift off its own ring.
const PATHS = [
  "M 22.2 264.3 A 208 88 -18 1 0 417.8 135.7 A 208 88 -18 1 0 22.2 264.3",
  "M 37.6 154.5 A 188 128 14 1 0 402.4 245.5 A 188 128 14 1 0 37.6 154.5",
  "M 70 200 A 150 150 0 1 0 370 200 A 150 150 0 1 0 70 200",
];

// newest role first → innermost, fastest
const SATS = [
  { path: PATHS[2], dur: 96, r: 11, fill: "var(--accent-vivid)" },
  { path: PATHS[1], dur: 148, r: 12, fill: "var(--ochre)" },
  { path: PATHS[0], dur: 210, r: 10, fill: "var(--sage)" },
];

export default function Orbit() {
  return (
    <svg
      className="orbit"
      viewBox="0 0 440 400"
      fill="none"
      role="img"
      aria-label={`Career map: ${experience.map((e) => e.company).join(", ")}`}
    >
      <g stroke="var(--line-2)" strokeWidth="1.1" fill="none">
        <path d={PATHS[0]} />
        <path d={PATHS[1]} />
        <path d={PATHS[2]} opacity=".5" />
      </g>

      <circle cx="238" cy="178" r="104" fill="var(--accent-vivid)" />
      <circle cx="238" cy="178" r="104" fill="url(#orbit-grain)" opacity=".3" />

      {experience.map((role, i) => {
        const s = SATS[i];
        if (!s) return null;
        return (
          <g
            key={role.company + role.period}
            className="orbit-sat"
            style={{ offsetPath: `path("${s.path}")`, animationDuration: `${s.dur}s` }}
          >
            <title>{`${role.company} — ${role.period}`}</title>
            <circle r={s.r + 12} fill="transparent" />
            <circle className="orbit-halo" r={s.r + 8} fill={s.fill} />
            <circle r={s.r} fill={s.fill} />
          </g>
        );
      })}

      <defs>
        <pattern id="orbit-grain" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="transparent" />
          <circle cx="1" cy="1" r=".55" fill="#000" opacity=".16" />
        </pattern>
      </defs>
    </svg>
  );
}
