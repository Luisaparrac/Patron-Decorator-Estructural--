const ServiceCreator = require("./ServiceCreator");
const CarryOnDecorator = require("../decorator/CarryOnDecorator");

class CarryOnCreator extends ServiceCreator {
  constructor() {
    super({
      code: CarryOnDecorator.CODE,
      label: CarryOnDecorator.LABEL,
      detail: "Maleta en el compartimiento superior",
      icon: "🎒",
      price: CarryOnDecorator.PRICE
    });
  }

  createDecorator(ticket) {
    return new CarryOnDecorator(ticket);
  }
}

module.exports = CarryOnCreator;
