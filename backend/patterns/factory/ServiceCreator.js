const ReservationError = require("../../errors/ReservationError");

// Creador del patrón Factory Method. addTo() es la operación común;
// createDecorator() es el método fábrica que cada subclase implementa.
class ServiceCreator {
  constructor({ code, label, detail, icon, price }) {
    this.code = code;
    this.label = label;
    this.detail = detail;
    this.icon = icon;
    this.price = price;
  }

  createDecorator() {
    throw new Error("createDecorator() must be implemented.");
  }

  addTo(ticket, options = {}) {
    if (ticket.hasService(this.code)) {
      throw new ReservationError(`${this.label} ya está incluido en el boleto.`);
    }
    return this.createDecorator(ticket, options);
  }

  toJSON() {
    return { code: this.code, label: this.label, detail: this.detail, icon: this.icon, price: this.price };
  }
}

module.exports = ServiceCreator;
