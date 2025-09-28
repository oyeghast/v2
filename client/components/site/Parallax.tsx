export default function Parallax() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#101616" }} />
    </div>
  );
}
