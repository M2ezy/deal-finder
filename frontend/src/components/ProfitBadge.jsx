export default function ProfitBadge({ profit }) {
  const color = profit > 0 ? "green" : "red";
  return <span style={{ color }}>{profit > 0 ? `$${profit}` : "LOSS"}</span>;
}