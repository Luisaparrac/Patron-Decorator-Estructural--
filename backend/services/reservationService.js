const crypto = require("crypto");
const flights = require("../data/flights");
const BasicTicket = require("../patterns/decorator/BasicTicket");
const { creators, findCreator } = require("../patterns/factory/serviceCatalog");
const ReservationError = require("../errors/ReservationError");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const reservedSeats = new Map();

function takenSeats(flight) {
  return [...flight.occupied, ...(reservedSeats.get(flight.id) || [])];
}

function publicFlight(flight) {
  const { occupied, ...data } = flight;
  return { ...data, occupied: takenSeats(flight) };
}

function listFlights() {
  return flights.map(publicFlight);
}

function findFlight(flightId) {
  const flight = flights.find(f => f.id === flightId);
  if (!flight) throw new ReservationError("Vuelo no encontrado.", 404);
  return flight;
}

function buildTicket(flight, services = [], options = {}) {
  if (!Array.isArray(services)) throw new ReservationError("La lista de servicios no es válida.");
  const unknown = services.filter(code => !findCreator(code));
  if (unknown.length) throw new ReservationError(`Servicio no válido: ${unknown.join(", ")}.`);

  return creators
    .filter(creator => services.includes(creator.code))
    .reduce((ticket, creator) => creator.addTo(ticket, options), new BasicTicket(flight));
}

function quote({ flightId, services = [], seat = null } = {}) {
  const flight = findFlight(flightId);
  const ticket = buildTicket(flight, services, { seat });
  return {
    flight: publicFlight(flight),
    description: ticket.getDescription(),
    services: ticket.getServices(),
    layers: ticket.getLayers(),
    seat: ticket.getSeat(),
    boardingGroup: ticket.getBoardingGroup(),
    basePrice: flight.price,
    finalPrice: ticket.getPrice()
  };
}

function validatePassenger(name, email) {
  if (!name || name.trim().length < 3) throw new ReservationError("Escribe el nombre completo del pasajero.");
  if (!email || !EMAIL_PATTERN.test(email.trim())) throw new ReservationError("Escribe un correo electrónico válido.");
}

function validateSeat(flight, services, seat) {
  if (!services.includes("seat")) return;
  if (!seat) throw new ReservationError("Elige tu asiento en el mapa del avión.");
  if (takenSeats(flight).includes(seat)) throw new ReservationError(`El asiento ${seat} ya está ocupado.`, 409);
}

function reserve({ flightId, name, email, services = [], seat = null, expectedPrice } = {}) {
  validatePassenger(name, email);
  const result = quote({ flightId, services, seat });
  const flight = findFlight(flightId);
  validateSeat(flight, services, seat);

  if (expectedPrice !== undefined && Number(expectedPrice) !== result.finalPrice) {
    throw new ReservationError("El precio no coincide con el calculado por el servidor.", 409, { finalPrice: result.finalPrice });
  }

  if (result.seat) reservedSeats.set(flight.id, [...(reservedSeats.get(flight.id) || []), result.seat]);

  return {
    code: "LC-" + crypto.randomBytes(3).toString("hex").toUpperCase(),
    passenger: { name: name.trim(), email: email.trim() },
    ...result
  };
}

module.exports = { listFlights, buildTicket, quote, reserve };
