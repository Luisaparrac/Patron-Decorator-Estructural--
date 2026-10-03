const ServiceCreator = require("./ServiceCreator");
const CheckedBaggageDecorator = require("../decorator/CheckedBaggageDecorator");

class CheckedBaggageCreator extends ServiceCreator {
  constructor() {
    super({
      code: CheckedBaggageDecorator.CODE,
      label: CheckedBaggageDecorator.LABEL,
      detail: "Una maleta documentada en bodega",
      icon: "🧳",
      price: CheckedBaggageDecorator.PRICE
    });
  }

  createDecorator(ticket) {
    return new CheckedBaggageDecorator(ticket);
  }
}

module.exports = CheckedBaggageCreator;
