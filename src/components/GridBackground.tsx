export default function GridBackground() {
  return (
    <div
      className="absolute inset-0 bg-grid-pattern pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
}
