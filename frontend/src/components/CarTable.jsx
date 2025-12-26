import ProfitBadge from "./ProfitBadge";

const mockCars = [
  {
    id: 1,
    titleStatus: "SALVAGE",
    year: 2016,
    make: "Toyota",
    model: "Camry",
    mileage: 145000,
    price: 6800,
    profit: 2700
  },
  {
    id: 2,
    titleStatus: "CLEAN",
    year: 2014,
    make: "Honda",
    model: "Civic",
    mileage: 145000,
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
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {mockCars.map(car => {
          // Decision logic lives in JavaScript
          const titleColor = car.titleStatus === "CLEAN" ? "green" : "red";

          return (
            <tr key={car.id}>
              <td>{car.year} {car.make} {car.model}</td>
              <td>${car.price}</td>
              <td><ProfitBadge profit={car.profit} /></td>
              <td>
                <span style={{ color: titleColor }}>
                  {car.titleStatus}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
