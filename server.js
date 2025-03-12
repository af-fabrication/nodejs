const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const atelierRoutes = require("./routes/atelier");
const partnerRoutes = require("./routes/partners");
const partnerRequestRoutes = require("./routes/partnerRequests");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/atelier-orders", atelierRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/partner-requests", partnerRequestRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
