import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <PageMeta title="Not found — Surya Prabhas" description="The requested page could not be found." path="/404" noindex />
      <p>Error 404</p>
      <h1>Wrong turn.<br /><em>Good recovery.</em></h1>
      <span>This page doesn’t exist—or I broke a route while making something better.</span>
      <Link to="/" className="button button-dark">Back home ←</Link>
    </main>
  );
}
