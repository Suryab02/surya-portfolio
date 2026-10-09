import { useMemo } from "react";

// Playtime gauge for the GeForce NOW post. Takes the raw numbers off the
// app's own screen and renders them in the site's palette, so the figure
// stays readable at any width and matches the page it sits in.
export default function PlaytimeMeter({
  totalHours = 100,
  remainingHours = 30,
  remainingMinutes = 35,
  resetsOn = "19 October 2026",
  daysLeft,
}) {
  const { usedLabel, remainingLabel, usedPct } = useMemo(() => {
    const total = totalHours * 60;
    const remaining = remainingHours * 60 + remainingMinutes;
    const used = Math.max(0, total - remaining);
    const fmt = (mins) => `${Math.floor(mins / 60)}h ${mins % 60}m`;
    return {
      usedLabel: fmt(used),
      remainingLabel: fmt(remaining),
      usedPct: Math.min(100, Math.round((used / total) * 1000) / 10),
    };
  }, [totalHours, remainingHours, remainingMinutes]);

  return (
    <figure className="meter">
      <div className="meter-head">
        <span>Playtime remaining</span>
        <span>Resets {resetsOn}</span>
      </div>

      <p className="meter-big">
        {remainingLabel} <em>left of {totalHours}h</em>
      </p>

      <div
        className="meter-bar"
        role="img"
        aria-label={`${usedLabel} used of ${totalHours} hours, ${usedPct}% consumed`}
      >
        <span style={{ width: `${usedPct}%` }} />
      </div>

      <figcaption className="meter-foot">
        <span>
          <b>{usedLabel}</b> used · {usedPct}%
        </span>
        {daysLeft != null && (
          <span>
            {daysLeft} day{daysLeft === 1 ? "" : "s"} left in the cycle
          </span>
        )}
      </figcaption>
    </figure>
  );
}
