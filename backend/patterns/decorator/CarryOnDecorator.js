const TicketDecorator = require("./TicketDecorator");

class CarryOnDecorator extends TicketDecorator {
  static CODE = "carryon";
  static LABEL = "Equipaje de cabina 10 kg";
  static PRICE = 40000;

  constructor(ticket) { super(ticket, CarryOnDecorator.CODE); }

  getPrice() { return super.getPrice() + CarryOnDecorator.PRICE; }
  getDescription() { return `${super.getDescription()} + ${CarryOnDecorator.LABEL}`; }

  getServices() {
    return [...super.getServices(), { code: this.code, label: CarryOnDecorator.LABEL, price: CarryOnDecorator.PRICE }];
  }
}

module.exports = CarryOnDecorator;
