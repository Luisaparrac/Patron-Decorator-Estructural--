const express = require("express");
const cors = require("cors");
const path = require("path");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND = path.join(__dirname, "../frontend");

app.use(cors());
app.use(express.json());
app.use("/api", reservationRoutes);
app.use(express.static(FRONTEND));
app.get("*", (req, res) => res.sendFile(path.join(FRONTEND, "index.html")));

if (require.main === module) {
  app.listen(PORT, () => console.log(`LowCost running at http://localhost:${PORT}`));
}

module.exports = app;
