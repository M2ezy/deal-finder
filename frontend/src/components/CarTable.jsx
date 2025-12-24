import ProfitBadge from "./ProfitBadge";

const mockCars = [
  {
    id: 1,
    year: 2016,
    make: "Toyota",
    model: "Camry",
    price: 6800,
    profit: 2700
  },
  {
    id: 2,
    year: 2014,
    make: "Honda",
    model: "Civic",
    price: 7200,
    profit: -500
  }
];

export default function CarTable() {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Car</th>
          <th>Buy Price</th>
          <th>Expected Profit</th>
        </tr>
      </thead>
      <tbody>
        {mockCars.map(car => (
          <tr key={car.id}>
            <td>{car.year} {car.make} {car.model}</td>
            <td>${car.price}</td>
            <td><ProfitBadge profit={car.profit} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
