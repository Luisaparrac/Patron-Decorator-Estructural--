const TicketDecorator = require("./TicketDecorator");
const ReservationError = require("../../errors/ReservationError");

const SEAT_PATTERN = /^(1[0-5]|[1-9])[A-F]$/;

// Además de cobrar, cambia el comportamiento del boleto: ahora tiene un asiento asignado.
class SeatDecorator extends TicketDecorator {
  static CODE = "seat";
  static LABEL = "Selección de asiento";
  static PRICE = 25000;

  constructor(ticket, seat = null) {
    super(ticket, SeatDecorator.CODE);
    if (seat && !SEAT_PATTERN.test(seat)) {
      throw new ReservationError(`El asiento ${seat} no existe en este avión.`);
    }
    this.seat = seat;
  }

  getPrice() { return super.getPrice() + SeatDecorator.PRICE; }
  getDescription() { return `${super.getDescription()} + Asiento ${this.seat || "por elegir"}`; }
  getSeat() { return this.seat; }

  getServices() {
    return [...super.getServices(), { code: this.code, label: `Asiento ${this.seat || "por elegir"}`, price: SeatDecorator.PRICE }];
  }
}

module.exports = SeatDecorator;
