const CheckedBaggageCreator = require("./CheckedBaggageCreator");
const CarryOnCreator = require("./CarryOnCreator");
const SeatCreator = require("./SeatCreator");
const PriorityBoardingCreator = require("./PriorityBoardingCreator");

// El orden de esta lista es el orden en que se envuelve el boleto:
// BasicTicket -> CheckedBaggage -> CarryOn -> Seat -> PriorityBoarding
const creators = [
  new CheckedBaggageCreator(),
  new CarryOnCreator(),
  new SeatCreator(),
  new PriorityBoardingCreator()
];

const findCreator = code => creators.find(creator => creator.code === code);
const listServices = () => creators.map(creator => creator.toJSON());

module.exports = { creators, findCreator, listServices };
