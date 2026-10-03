const ServiceCreator = require("./ServiceCreator");
const PriorityBoardingDecorator = require("../decorator/PriorityBoardingDecorator");

class PriorityBoardingCreator extends ServiceCreator {
  constructor() {
    super({
      code: PriorityBoardingDecorator.CODE,
      label: PriorityBoardingDecorator.LABEL,
      detail: "Abordas primero, en el grupo A",
      icon: "⚡",
      price: PriorityBoardingDecorator.PRICE
    });
  }

  createDecorator(ticket) {
    return new PriorityBoardingDecorator(ticket);
  }
}

module.exports = PriorityBoardingCreator;
