const flights = [
  {
    id: "LC101", origin: "Bogotá", originCode: "BOG", destination: "Medellín", destinationCode: "MDE",
    date: "15 oct 2026", time: "07:30", duration: "1h 05m", gate: "A12", price: 180000,
    occupied: ["1A", "1B", "2C", "3D", "4F", "6A", "7E", "9C", "11B", "13F", "14D"]
  },
  {
    id: "LC202", origin: "Bogotá", originCode: "BOG", destination: "Cartagena", destinationCode: "CTG",
    date: "16 oct 2026", time: "10:15", duration: "1h 25m", gate: "B04", price: 220000,
    occupied: ["1C", "1D", "2A", "2F", "5B", "5C", "8D", "10A", "10F", "12C", "15E"]
  },
  {
    id: "LC303", origin: "Cali", originCode: "CLO", destination: "Bogotá", destinationCode: "BOG",
    date: "17 oct 2026", time: "14:40", duration: "1h 10m", gate: "C07", price: 165000,
    occupied: ["2B", "3A", "3F", "4C", "6D", "8B", "9E", "11A", "12F", "15C"]
  }
];

module.exports = flights;
