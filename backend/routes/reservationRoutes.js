const express = require("express");
const { listFlights, quote, reserve } = require("../services/reservationService");
const { listServices } = require("../patterns/factory/serviceCatalog");

const router = express.Router();

function handle(action, successStatus = 200) {
  return (req, res) => {
    try {
      res.status(successStatus).json(action(req.body));
    } catch (error) {
      if (!error.status) console.error(error);
      res.status(error.status || 500).json({
        error: error.status ? error.message : "Error interno del servidor.",
        ...error.details
      });
    }
  };
}

router.get("/flights", (req, res) => res.json(listFlights()));
router.get("/services", (req, res) => res.json(listServices()));
router.post("/quote", handle(quote));
router.post("/reservations", handle(reserve, 201));
router.use((req, res) => res.status(404).json({ error: "Ruta de la API no encontrada." }));

module.exports = router;
