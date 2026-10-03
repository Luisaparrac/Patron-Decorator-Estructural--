const TicketDecorator = require("./TicketDecorator");

// Además de cobrar, cambia el comportamiento del boleto: aborda en el grupo A.
class PriorityBoardingDecorator extends TicketDecorator {
  static CODE = "priority";
  static LABEL = "Embarque prioritario";
  static PRICE = 30000;

  constructor(ticket) { super(ticket, PriorityBoardingDecorator.CODE); }

  getPrice() { return super.getPrice() + PriorityBoardingDecorator.PRICE; }
  getDescription() { return `${super.getDescription()} + ${PriorityBoardingDecorator.LABEL}`; }
  getBoardingGroup() { return "A"; }

  getServices() {
    return [...super.getServices(), { code: this.code, label: PriorityBoardingDecorator.LABEL, price: PriorityBoardingDecorator.PRICE }];
  }
}

module.exports = PriorityBoardingDecorator;
