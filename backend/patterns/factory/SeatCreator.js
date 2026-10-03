const ServiceCreator = require("./ServiceCreator");
const SeatDecorator = require("../decorator/SeatDecorator");

class SeatCreator extends ServiceCreator {
  constructor() {
    super({
      code: SeatDecorator.CODE,
      label: SeatDecorator.LABEL,
      detail: "Escoge tu puesto en el mapa del avión",
      icon: "💺",
      price: SeatDecorator.PRICE
    });
  }

  createDecorator(ticket, options) {
    return new SeatDecorator(ticket, options.seat);
  }
}

module.exports = SeatCreator;
