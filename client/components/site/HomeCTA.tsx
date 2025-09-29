import { Link } from "react-router-dom";

export default function HomeCTA() {
  return (
    <section className="w-full" style={{ backgroundColor: "#05160e" }}>
      <div className="container mx-auto px-4 pt-4 pb-2">
        <div className="flex flex-wrap gap-3">
          <Link to="/shorts" className="btn-cta">Shorts</Link>
          <Link to="/downloads" className="btn-cta">Downloads</Link>
        </div>
      </div>
    </section>
  );
}
