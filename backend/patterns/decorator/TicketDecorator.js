const TicketComponent = require("./TicketComponent");

// Decorador base: envuelve otro boleto y le delega todo lo que no modifica.
class TicketDecorator extends TicketComponent {
  constructor(ticket, code) {
    super();
    this.ticket = ticket;
    this.code = code;
  }

  getPrice() { return this.ticket.getPrice(); }
  getDescription() { return this.ticket.getDescription(); }
  getServices() { return this.ticket.getServices(); }
  getLayers() { return [...this.ticket.getLayers(), this.constructor.name]; }
  getSeat() { return this.ticket.getSeat(); }
  getBoardingGroup() { return this.ticket.getBoardingGroup(); }
  hasService(code) { return this.code === code || this.ticket.hasService(code); }
}

module.exports = TicketDecorator;
