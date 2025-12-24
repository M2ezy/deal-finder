import CarTable from "../components/CarTable";
import Filters from "../components/Filters";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🚗 Deal Finder Dashboard</h1>
      <Filters />
      <CarTable />
    </div>
  );
}