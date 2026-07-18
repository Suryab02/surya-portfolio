import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Not found — Surya Prabhas";
    return () => { document.title = "Surya Prabhas Bandaru — Software Engineer"; };
  }, []);

  return (
    <main className="not-found">
      <p>Error 404</p>
      <h1>Wrong turn.<br /><em>Good recovery.</em></h1>
      <span>This page doesn’t exist—or I broke a route while making something better.</span>
      <Link to="/" className="button button-dark">Back home ←</Link>
    </main>
  );
}
