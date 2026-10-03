const TicketComponent = require("./TicketComponent");

// Componente concreto: la tarifa básica solo incluye un artículo personal y aborda en el grupo C.
class BasicTicket extends TicketComponent {
  constructor(flight) {
    super();
    this.flight = flight;
  }

  getPrice() { return this.flight.price; }

  getDescription() {
    return `Tarifa Básica ${this.flight.originCode} → ${this.flight.destinationCode}`;
  }

  getServices() {
    return [{ code: "basic", label: "Tarifa básica + artículo personal", price: this.flight.price }];
  }

  getLayers() { return ["BasicTicket"]; }
  getSeat() { return null; }
  getBoardingGroup() { return "C"; }
  hasService() { return false; }
}

module.exports = BasicTicket;
