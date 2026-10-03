const TicketDecorator = require("./TicketDecorator");

class CheckedBaggageDecorator extends TicketDecorator {
  static CODE = "checked";
  static LABEL = "Equipaje de bodega 23 kg";
  static PRICE = 70000;

  constructor(ticket) { super(ticket, CheckedBaggageDecorator.CODE); }

  getPrice() { return super.getPrice() + CheckedBaggageDecorator.PRICE; }
  getDescription() { return `${super.getDescription()} + ${CheckedBaggageDecorator.LABEL}`; }

  getServices() {
    return [...super.getServices(), { code: this.code, label: CheckedBaggageDecorator.LABEL, price: CheckedBaggageDecorator.PRICE }];
  }
}

module.exports = CheckedBaggageDecorator;
