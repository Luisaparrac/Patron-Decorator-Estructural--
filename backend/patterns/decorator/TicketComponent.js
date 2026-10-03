// Componente del patrón Decorator: contrato común del boleto básico y de cada servicio.
class TicketComponent {
  getPrice() { throw new Error("getPrice() must be implemented."); }
  getDescription() { throw new Error("getDescription() must be implemented."); }
  getServices() { throw new Error("getServices() must be implemented."); }
  getLayers() { throw new Error("getLayers() must be implemented."); }
  getSeat() { throw new Error("getSeat() must be implemented."); }
  getBoardingGroup() { throw new Error("getBoardingGroup() must be implemented."); }
  hasService() { throw new Error("hasService() must be implemented."); }
}

module.exports = TicketComponent;
