const express = require("express");
const cors = require("cors");
const app = express();
const port = 3300;
const donaterRoutes = require("./routes/donaterRoutes")

// Common middleware
app.use(cors());
app.use(express.json());

// routers
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", donaterRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
