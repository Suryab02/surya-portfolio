import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="max-w-[860px] mx-auto px-6 sm:px-9 pt-40 pb-16">
      <p className="font-mono text-xs text-accent mb-5">// 404</p>
      <h1 className="font-display font-medium uppercase text-bright text-3xl sm:text-4xl tracking-[-0.02em]">
        Not found<span className="text-ghost">.</span>
      </h1>
      <p className="text-sm text-dim mt-4 max-w-md leading-[1.8]">
        This page doesn't exist — or it did, and I broke something.
      </p>
      <Link
        to="/"
        className="inline-block mt-8 font-mono text-[11px] text-accent no-underline hover:underline"
      >
        ← back_home
      </Link>
    </div>
  );
}
