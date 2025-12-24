export default function Filters() {
  return (
    <div style={{ marginBottom: "15px" }}>
      <input placeholder="Max Price" />
      <input placeholder="Min Profit" style={{ marginLeft: "10px" }} />
      <button style={{ marginLeft: "10px" }}>Apply</button>
    </div>
  );
}